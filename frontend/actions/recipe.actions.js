"use server";

import { freeMealRecommendations, proTierLimit } from "@/lib/arcjet";
import { checkUser } from "@/lib/checkUser";
import { request } from "@arcjet/next";
import { GoogleGenerativeAI } from "@google/generative-ai";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
console.log(GEMINI_API_KEY, +"<<< GEMINI_API_KEY loaded");

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

function classifyGeminiError(error) {
  const message = String(error?.message || "").toLowerCase();
  const status = error?.status ?? error?.code;

  const isQuota =
    status === 429 ||
    message.includes("resource_exhausted") ||
    message.includes("quota") ||
    message.includes("rate limit") ||
    message.includes("too many requests") ||
    message.includes("exceeded");

  const isAuth =
    status === 401 ||
    status === 403 ||
    message.includes("api key") ||
    message.includes("permission") ||
    message.includes("unauthorized") ||
    message.includes("forbidden");

  return { isQuota, isAuth, status, message };
}

async function fetchRecentPublicRecipesFallback({ limit = 5 } = {}) {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/recipes?filters[isPublic][$eq]=true&sort=publishedAt:desc&pagination[pageSize]=${limit}&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        cache: "no-store",
      },
    );

    if (!response.ok) return [];
    const data = await response.json();
    return data?.data ?? [];
  } catch {
    return [];
  }
}

async function fetchSimilarRecipesFallback(title, { limit = 1 } = {}) {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/recipes?filters[title][$containsi]=${encodeURIComponent(
        title,
      )}&sort=publishedAt:desc&pagination[pageSize]=${limit}&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        cache: "no-store",
      },
    );

    if (!response.ok) return [];
    const data = await response.json();
    return data?.data ?? [];
  } catch {
    return [];
  }
}

function blocksToText(blocks) {
  if (!Array.isArray(blocks)) return "";

  const parts = [];
  const walk = (node) => {
    if (!node) return;
    if (typeof node === "string") {
      parts.push(node);
      return;
    }
    if (typeof node?.text === "string") {
      parts.push(node.text);
      return;
    }
    const children = node?.children;
    if (Array.isArray(children)) {
      for (const child of children) walk(child);
      parts.push("\n");
    }
  };

  for (const block of blocks) walk(block);
  return parts
    .join("")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeStrapiRecipe(entity) {
  if (!entity) return null;

  const base =
    entity?.attributes && typeof entity.attributes === "object"
      ? { id: entity.id, ...entity.attributes }
      : entity;

  const description = Array.isArray(base.description)
    ? blocksToText(base.description)
    : base.description;

  return {
    ...base,
    description,
  };
}

function buildFallbackRecipeTemplate(title) {
  return {
    title,
    description:
      "AI generation is temporarily unavailable, so here’s a simple fallback template you can follow and customize.",
    category: "dinner",
    cuisine: "other",
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    ingredients: [
      {
        item: "Main ingredient",
        amount: "as needed",
        category: "Other",
      },
      {
        item: "Salt",
        amount: "to taste",
        category: "Spice",
      },
      {
        item: "Oil",
        amount: "1 tbsp",
        category: "Other",
      },
    ],
    instructions: [
      {
        step: 1,
        title: "Prep",
        instruction:
          "Gather ingredients and prep (wash/chop) anything that needs it.",
        tip: "Prep first to cook faster.",
      },
      {
        step: 2,
        title: "Cook",
        instruction:
          "Cook your main ingredient using your preferred method (pan, oven, air fryer) until done.",
        tip: "Adjust heat to avoid burning.",
      },
      {
        step: 3,
        title: "Season & Serve",
        instruction:
          "Season to taste, plate it up, and serve warm. Add a simple side if you want.",
        tip: "Taste and adjust salt at the end.",
      },
    ],
    nutrition: {},
    tips: ["Start simple, then add herbs/spices you like."],
    substitutions: [],
    imageUrl: "",
  };
}

function buildPantryFallbackSuggestions(ingredientsText) {
  const parts = String(ingredientsText || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const a = parts[0] || "Pantry";
  const b = parts[1] || "Veggies";
  const c = parts[2] || "Spices";

  return [
    {
      title: `Quick ${a} Stir-Fry`,
      description: `A simple stir-fry using ${a}, ${b}, and ${c}.`,
      matchPercentage: 60,
      missingIngredients: ["oil", "salt", "pepper"],
      category: "dinner",
      cuisine: "other",
      prepTime: 10,
      cookTime: 15,
      servings: 2,
    },
    {
      title: `${a} & ${b} Salad Bowl`,
      description: `A fresh bowl that works with whatever you have on hand, centered around ${a} and ${b}.`,
      matchPercentage: 55,
      missingIngredients: ["lemon or vinegar", "olive oil"],
      category: "lunch",
      cuisine: "other",
      prepTime: 12,
      cookTime: 0,
      servings: 2,
    },
    {
      title: `Simple ${a} Soup`,
      description: `A cozy soup using ${a} and pantry basics—adjust thickness and seasoning to taste.`,
      matchPercentage: 50,
      missingIngredients: ["water or stock", "salt"],
      category: "dinner",
      cuisine: "other",
      prepTime: 10,
      cookTime: 25,
      servings: 3,
    },
    {
      title: `${b} Omelet (Optional ${a})`,
      description: `A quick omelet-style dish—add ${a} if it fits, otherwise keep it simple.`,
      matchPercentage: 45,
      missingIngredients: ["eggs"],
      category: "breakfast",
      cuisine: "other",
      prepTime: 8,
      cookTime: 8,
      servings: 1,
    },
    {
      title: `Sheet-Pan ${a} & ${b}`,
      description: `Roast ${a} and ${b} with your favorite seasoning for an easy hands-off meal.`,
      matchPercentage: 50,
      missingIngredients: ["oil", "salt"],
      category: "dinner",
      cuisine: "other",
      prepTime: 10,
      cookTime: 30,
      servings: 2,
    },
  ];
}

export async function getRecipesByPantryIngredients() {
  try {
    const user = await checkUser();

    if (!user) {
      throw new Error("User not authenticated");
    }

    const isPro = user.subscriptionTier === "pro";

    // Apply Arject rate limit based on tier
    const arcjetClient = isPro ? proTierLimit : freeMealRecommendations;

    // Create a request object for Arject
    const req = await request();

    const decision = await arcjetClient.protect(req, {
      userId: user.clerkId,
      requested: 1,
    });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        throw new Error(
          `Monthly scan limit reached ${isPro ? "Please contact suppoer if you need more scans" : "Upgrade to pro for unlimitedscans!"}`,
        );
      }
      throw new Error("Request denied by security system");
    }

    // Get user's pantry items
    const pantryResponse = await fetch(
      `${STRAPI_URL}/api/pantry-items?filters[owner][id][$eq]=${user.id}`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        cache: "no-store",
      },
    );

    if (!pantryResponse.ok) {
      throw new Error("Failed to fetch pantry items");
    }

    const pantryData = await pantryResponse.json();

    if (!pantryData.data || pantryData.data.length === 0) {
      return {
        success: false,
        message: "Your pantry is empty. Add ingredients first!",
      };
    }

    const ingredients = pantryData.data.map((item) => item.name).join(", ");

    if (!GEMINI_API_KEY) {
      const fallbackRecipes = await fetchRecentPublicRecipesFallback({
        limit: 5,
      });

      return {
        success: true,
        recipes:
          fallbackRecipes.length > 0
            ? fallbackRecipes.map(normalizeStrapiRecipe).filter(Boolean)
            : buildPantryFallbackSuggestions(ingredients),
        ingredientsUsed: ingredients,
        isFallback: true,
        recommendationsLimit: isPro ? "unlimited" : 5,
        message:
          "AI recommendations are currently unavailable. Showing fallback suggestions instead.",
      };
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
    You are a professional chef. Given these available ingredients: ${ingredients}

    Suggest 5 recipes that can be made primarily with these ingredients. It's okay if the recipes need 1-2 common pantry staples (salt, pepper, oil, etc.) that aren't listed.

    Return ONLY a valid JSON array (no markdown, no explanations):
    [
      {
        "title": "Recipe name",
        "description": "Brief 1-2 sentence description",
        "matchPercentage": 85,
        "missingIngredients": ["ingredient1", "ingredient2"],
        "category": "breakfast|lunch|dinner|snack|dessert",
        "cuisine": "italian|chinese|mexican|etc",
        "prepTime": 20,
        "cookTime": 30,
        "servings": 4
      }
    ]

    Rules:
    - matchPercentage should be 70-100% (how many listed ingredients are used)
    - missingIngredients should be common items or optional additions
    - Sort by matchPercentage descending
    - Make recipes realistic and delicious
    `;

    let text;
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      text = response.text();
    } catch (error) {
      const { isQuota, isAuth } = classifyGeminiError(error);
      if (isQuota || isAuth) {
        const fallbackRecipes = await fetchRecentPublicRecipesFallback({
          limit: 5,
        });

        return {
          success: true,
          recipes:
            fallbackRecipes.length > 0
              ? fallbackRecipes.map(normalizeStrapiRecipe).filter(Boolean)
              : buildPantryFallbackSuggestions(ingredients),
          ingredientsUsed: ingredients,
          isFallback: true,
          recommendationsLimit: isPro ? "unlimited" : 5,
          message:
            "AI tokens are exhausted or unavailable right now. Showing recent public recipes instead.",
        };
      }

      throw error;
    }

    let recipeSuggestions;
    try {
      const cleanText = text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();
      recipeSuggestions = JSON.parse(cleanText);
    } catch (parseError) {
      console.error("Failed to parse Gemini response: ", text);
      throw new Error(
        "Failed to generate recipe suggestions. Please try again.",
      );
    }

    return {
      success: true,
      recipes: recipeSuggestions,
      ingredientsUsed: ingredients,
      recommendationsLimit: isPro ? "unlimited" : 5,
      message: `Found ${recipeSuggestions.length} recipes you can make!`,
    };
  } catch (error) {
    console.error("❌ Error in generating recipe suggestions:", error);
    throw new Error(error.message || "Failed to get recipe suggestions");
  }
}

// Helper function to fetch image from unspalash
async function fetchRecipeImage(recipeName) {
  try {
    if (!UNSPLASH_ACCESS_KEY) {
      console.warn("⚠️ UNSPLASH_ACCESS_KEY not set, skipping image fetch");
      return "";
    }

    const searchQuery = `${recipeName}`;

    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
        searchQuery,
      )}&per_page=1&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      },
    );

    if (!response.ok) {
      console.error("Unsplash API error:", response.statusText);
      return "";
    }

    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const photo = data.results[0];
      return photo.urls.regular;
    }
    return "";
  } catch (error) {
    console.error("Error fetching Unsplash image:", error);
    return "";
  }
}

// Helper function to normalize recipe title
function normalizeTitle(title) {
  return title
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function normalizeCategory(category) {
  const value = String(category || "")
    .trim()
    .toLowerCase();

  const allowed = new Set(["breakfast", "lunch", "dinner", "snack", "dessert"]);
  return allowed.has(value) ? value : "dinner";
}

function normalizeCuisine(cuisine) {
  const raw = String(cuisine || "")
    .trim()
    .toLowerCase();

  if (
    raw === "middle eastern" ||
    raw === "middle-eastern" ||
    raw === "middle eastern cuisine" ||
    raw === "middle-eastern cuisine"
  ) {
    return "middle - eastern";
  }

  const allowed = new Set([
    "italian",
    "chinese",
    "mexican",
    "indian",
    "american",
    "thai",
    "japanese",
    "mediterranean",
    "french",
    "korean",
    "vietnamese",
    "spanish",
    "greek",
    "turkish",
    "moroccan",
    "brazilian",
    "caribbean",
    "middle - eastern",
    "british",
    "german",
    "portuguese",
    "other",
  ]);

  return allowed.has(raw) ? raw : "other";
}

function toStrapiBlocks(value) {
  if (Array.isArray(value)) return value;
  const text = String(value || "").trim();
  if (!text) return [];

  return [
    {
      type: "paragraph",
      children: [{ type: "text", text }],
    },
  ];
}

// Get or generate recipe details
export async function getOrGenerateRecipe(formData) {
  try {
    const user = await checkUser();

    if (!user) {
      throw new Error("User not authenticated");
    }

    const recipeName = formData.get("recipeName");
    if (!recipeName) {
      throw new Error("Recipe name is rewuired");
    }

    // Normalize the title (e.g., "apple cake" → "Apple Cake")
    const normalizedTitle = normalizeTitle(recipeName);

    const isPro = user.subscriptionTier === "pro";

    // Step 1: Check if recipe already exists in DB (case-insensitive search)
    const searchResponse = await fetch(
      `${STRAPI_URL}/api/recipes?filters[title][$eqi]=${encodeURIComponent(
        normalizedTitle,
      )}&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        cache: "no-store",
      },
    );

    if (searchResponse.ok) {
      const searchData = await searchResponse.json();

      if (searchData.data && searchData.data.length > 0) {
        const recipeFromDb = normalizeStrapiRecipe(searchData.data[0]);

        // Check if user has saved this recipe
        const savedRecipeResponse = await fetch(
          `${STRAPI_URL}/api/saved-recipes?filters[user][id][$eq]=${user.id}&filters[recipe][id][$eq]=${searchData.data[0].id}`,
          {
            headers: {
              Authorization: `Bearer ${STRAPI_API_TOKEN}`,
            },
            cache: "no-store",
          },
        );

        let isSaved = false;
        if (savedRecipeResponse.ok) {
          const saveData = await savedRecipeResponse.json();
          isSaved = saveData.data && saveData.data.length > 0;
        }

        return {
          success: true,
          recipe: recipeFromDb,
          recipeId: recipeFromDb?.id ?? searchData.data[0].id,
          isSaved: isSaved,
          fromDatabase: true,
          isPro,
          message: "Recipe loaded from database",
        };
      }
    }

    // Step 2: Recipe doesn't exist, generate with Gemini
    if (!GEMINI_API_KEY) {
      const fallbackRecipe = buildFallbackRecipeTemplate(normalizedTitle);
      return {
        success: true,
        recipe: fallbackRecipe,
        recipeId: null,
        isSaved: false,
        fromDatabase: false,
        isFallback: true,
        recommendationsLimit: isPro ? "unlimited" : 5,
        isPro,
        message:
          "AI generation is currently unavailable. Showing a simple fallback recipe template (not saved).",
      };
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
    You are a professional chef and recipe expert. Generate a detailed recipe for: "${normalizedTitle}"

    CRITICAL: The "title" field MUST be EXACTLY: "${normalizedTitle}" (no changes, no additions like "Classic" or "Easy")

    Return ONLY a valid JSON object with this exact structure (no markdown, no explanations):
    {
      "title": "${normalizedTitle}",
      "description": "Brief 2-3 sentence description of the dish",
      "category": "Must be ONE of these EXACT values: breakfast, lunch, dinner, snack, dessert",
      "cuisine": "Must be ONE of these EXACT values: italian, chinese, mexican, indian, american, thai, japanese, mediterranean, french, korean, vietnamese, spanish, greek, turkish, moroccan, brazilian, caribbean, middle - eastern, british, german, portuguese, other",
      "prepTime": "Time in minutes (number only)",
      "cookTime": "Time in minutes (number only)",
      "servings": "Number of servings (number only)",
      "ingredients": [
        {
          "item": "ingredient name",
          "amount": "quantity with unit",
          "category": "Protein|Vegetable|Spice|Dairy|Grain|Other"
        }
      ],
      "instructions": [
        {
          "step": 1,
          "title": "Brief step title",
          "instruction": "Detailed step instruction",
          "tip": "Optional cooking tip for this step"
        }
      ],
      "nutrition": {
        "calories": "calories per serving",
        "protein": "grams",
        "carbs": "grams",
        "fat": "grams"
      },
      "tips": [
        "General cooking tip 1",
        "General cooking tip 2",
        "General cooking tip 3"
      ],
      "substitutions": [
        {
          "original": "ingredient name",
          "alternatives": ["substitute 1", "substitute 2"]
        }
      ]
    }

    IMPORTANT RULES FOR CATEGORY:
    - Breakfast items (pancakes, eggs, cereal, etc.) → "breakfast"
    - Main meals for midday (sandwiches, salads, pasta, etc.) → "lunch"
    - Main meals for evening (heavier dishes, roasts, etc.) → "dinner"
    - Light items between meals (chips, crackers, fruit, etc.) → "snack"
    - Sweet treats (cakes, cookies, ice cream, etc.) → "dessert"

    IMPORTANT RULES FOR CUISINE:
    - Use lowercase only
    - Pick the closest match from the allowed values
    - If uncertain, use "other"

    Guidelines:
    - Make ingredients realistic and commonly available
    - Instructions should be clear and beginner-friendly
    - Include 6-10 detailed steps
    - Provide practical cooking tips
    - Estimate realistic cooking times
    - Keep total instructions under 12 steps
    `;

    let text;
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      text = response.text();
    } catch (error) {
      const { isQuota, isAuth } = classifyGeminiError(error);
      if (isQuota || isAuth) {
        const similar = await fetchSimilarRecipesFallback(normalizedTitle, {
          limit: 1,
        });

        if (similar.length > 0) {
          const recipeFromDb = normalizeStrapiRecipe(similar[0]);
          return {
            success: true,
            recipe: recipeFromDb,
            recipeId: recipeFromDb?.id ?? null,
            isSaved: false,
            fromDatabase: true,
            isFallback: true,
            recommendationsLimit: isPro ? "unlimited" : 5,
            isPro,
            message:
              "AI tokens are exhausted or unavailable right now. Loaded a similar recipe from the database instead.",
          };
        }

        const fallbackRecipe = buildFallbackRecipeTemplate(normalizedTitle);
        return {
          success: true,
          recipe: fallbackRecipe,
          recipeId: null,
          isSaved: false,
          fromDatabase: false,
          isFallback: true,
          recommendationsLimit: isPro ? "unlimited" : 5,
          isPro,
          message:
            "AI tokens are exhausted or unavailable right now. Showing a simple fallback recipe template (not saved).",
        };
      }

      throw error;
    }

    // Parse JSON response
    let recipeData;
    try {
      const cleanText = text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();
      recipeData = JSON.parse(cleanText);
    } catch (parseError) {
      console.error("Failed to parse Gemini response:", text);
      throw new Error("Failed to generate recipe. Please try again.");
    }

    // FORCE the title to be our normalized version
    recipeData.title = normalizedTitle;

    const category = normalizeCategory(recipeData.category);
    const cuisine = normalizeCuisine(recipeData.cuisine);

    // Step 3: Fetch image from Unsplash
    const imageUrl = await fetchRecipeImage(normalizedTitle);

    // Step 4: Save generated recipe to database
    const strapiRecipeData = {
      data: {
        title: normalizedTitle,
        description: toStrapiBlocks(recipeData.description),
        cuisine,
        category,
        ingredients: recipeData.ingredients,
        instructions: recipeData.instructions,
        prepTime: Number(recipeData.prepTime),
        cookTime: Number(recipeData.cookTime),
        servings: Number(recipeData.servings),
        nutrition: recipeData.nutrition,
        tips: recipeData.tips,
        substitutions: recipeData.substitutions,
        imageUrl: imageUrl || "",
        isPublic: true,
        author: user.id,
      },
    };

    const createRecipeResponse = await fetch(`${STRAPI_URL}/api/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify(strapiRecipeData),
    });

    if (!createRecipeResponse.ok) {
      const errorText = await createRecipeResponse.text();
      console.error("❌ Failed to save recipe:", errorText);
      throw new Error("Failed to save recipe to database");
    }

    const createdRecipe = await createRecipeResponse.json();

    return {
      success: true,
      recipe: {
        ...recipeData,
        title: normalizedTitle,
        category,
        cuisine,
        imageUrl: imageUrl || "",
      },
      recipeId: createdRecipe.data.id,
      isSaved: false,
      fromDatabase: false,
      recommendationsLimit: isPro ? "unlimited" : 5,
      isPro,
      message: "Recipe generated and saved successfully!",
    };
  } catch (error) {
    console.error("Error in getOrGenerateRecipe:", error);
    throw new Error(error.message || "Failed to load recipe");
  }
}

// Save recipe to user's collection (bookmark)
export async function saveRecipeToCollection(formData) {
  try {
    const user = await checkUser();

    if (!user) {
      throw new Error("User not authenticated");
    }

    const recipeId = formData.get("recipeId");

    if (!recipeId) {
      throw new Error("Recipe ID is required");
    }

    // Check if alredy saved
    const existingResponse = await fetch(
      `${STRAPI_URL}/api/saved-recipes?filters[user][id][$eq]=${user.id}&filters[recipe][id][$eq]=${recipeId}`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        cache: "no-store",
      },
    );

    if (existingResponse.ok) {
      const existingData = await existingResponse.json();
      if (existingData.data && existingData.data.length > 0) {
        return {
          success: true,
          alreadySaved: true,
          message: "Recipe is already in your collection",
        };
      }
    }

    // Create saved recipe relation
    const saveResponse = await fetch(`${STRAPI_URL}/api/saved-recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          savedAt: new Date().toISOString(),
          recipe: { id: Number(recipeId) },
          user: { id: Number(user.id) },
        },
      }),
    });

    if (!saveResponse.ok) {
      const errorText = await saveResponse.text();
      console.error("❌ Failed to save recipe:", errorText);
      throw new Error("Failed to save recipe to collection");
      // throw new Error(errorText);
    }

    const savedRecipe = await saveResponse.json();

    return {
      success: true,
      alreadySaved: false,
      savedRecipe: savedRecipe.data,
      message: "Recipe saved to your collection!",
    };
  } catch (error) {
    console.error("❌ Error saving recipe to collection:", error);
    throw new Error(error.message || "Failed to save recipe");
  }
}

// remove recipe to user's collection (unbookmark)
export async function removeRecipeFromCollection(formData) {
  try {
    const user = await checkUser();

    if (!user) {
      throw new Error("User not authenticated");
    }

    const recipeId = formData.get("recipeId");
    if (!recipeId) {
      throw new Error("Recipe ID is rewuired");
    }

    // Find saved recipe relation
    const searchResponse = await fetch(
      `${STRAPI_URL}/api/saved-recipes?filters[user][id][$eq]=${user.id}&filters[recipe][id][$eq]=${recipeId}`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        cache: "no-store",
      },
    );

    if (!searchResponse.ok) {
      throw new Error("Failed to find saved recipe");
    }

    const searchData = await searchResponse.json();

    if (!searchData.data || searchData.data.length === 0) {
      return {
        success: true,
        message: "Recipe was not in your collection",
      };
    }

    // Delete saved recipe relation
    const savedRecipeId = searchData.data[0].id;
    const deleteResponse = await fetch(
      `${STRAPI_URL}/api/saved-recipes/${savedRecipeId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
      },
    );

    if (!deleteResponse.ok) {
      throw new Error("Failed to remove recipe from collection");
    }

    return {
      success: true,
      message: "Recipe removed from your collection",
    };
  } catch (error) {
    console.error("❌ Error removing recipe from collection:", error);
    throw new Error(error.message || "Failed to remove recipe");
  }
}

// get users saved recipe
export async function getSavedRecipes() {
  try {
    const user = await checkUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    // Fetch saved recipes with populated recipe data
    const response = await fetch(
      `${STRAPI_URL}/api/saved-recipes?filters[user][id][$eq]=${user.id}&populate[recipe][populate]=*&sort=savedAt:desc`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch saved recipes");

      // const errorText = await response.text();
      // console.error("Strapi Error:", response.status, errorText);
      // throw new Error("Failed to fetch saved recipes");
    }

    const data = await response.json();

    // Extract recipes from saved-recipes relations
    const recipes = (data?.data ?? [])
      .map((savedRecipe) => {
        const recipeEntity =
          savedRecipe?.recipe?.data ??
          savedRecipe?.attributes?.recipe?.data ??
          savedRecipe?.recipe ??
          savedRecipe?.attributes?.recipe;
        return normalizeStrapiRecipe(recipeEntity);
      })
      .filter(Boolean);

    return {
      success: true,
      recipes,
      count: recipes.length,
    };
  } catch (error) {
    console.error("Error fetching saved recipes:", error);
    throw new Error(error.message || "Failed to load saved recipes");
  }
}
