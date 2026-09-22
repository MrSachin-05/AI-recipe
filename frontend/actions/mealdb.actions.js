"use server";

import { getDishesByCategory, getDishesByCountry } from "@/lib/dishes";

const MEALDB_BASE = "https://www.themealdb.com/api/json/v1/1";

export async function getRecipeOfTheDay() {
  try {
    const response = await fetch(`${MEALDB_BASE}/random.php`, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!response.ok) {
      throw new Error("Failed to fetch recipe of the day");
    }

    const data = await response.json();

    return {
      success: true,
      recipe: data.meals[0],
    };
  } catch (error) {
    console.error("Error fetching recipe of the day:", error);
    throw new Error(error.message || "Failed to load recipe");
  }
}

export async function getCategories() {
  try {
    const response = await fetch(`${MEALDB_BASE}/list.php?c=list`, {
      next: { revalidate: 604800 }, // Cache for 1 week
    });

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await response.json();

    return {
      success: true,
      categories: data.meals || [],
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error(error.message || "Failed to load categories");
  }
}

export async function getAreas() {
  try {
    const response = await fetch(`${MEALDB_BASE}/list.php?a=list`, {
      next: { revalidate: 604800 }, // Cache for 1 week
    });

    if (!response.ok) {
      throw new Error("Failed to fetch areas");
    }

    const data = await response.json();

    return {
      success: true,
      areas: data.meals || [],
    };
  } catch (error) {
    console.error("Error fetching areas:", error);
    throw new Error(error.message || "Failed to load areas");
  }
}

export async function getMealsByCategory(category) {
  const localDishes = getDishesByCategory(category).map((d) => ({
    idMeal: d.id,
    strMeal: d.title,
    strMealThumb: d.imageUrl,
  }));

  try {
    const response = await fetch(`${MEALDB_BASE}/filter.php?c=${category}`, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!response.ok) {
      return { success: true, meals: localDishes, category };
    }

    const data = await response.json();
    const remoteMeals = data.meals || [];

    // Merge without duplicates
    const titles = new Set(remoteMeals.map((m) => m.strMeal.toLowerCase()));
    const merged = [
      ...localDishes.filter((d) => !titles.has(d.strMeal.toLowerCase())),
      ...remoteMeals,
    ];

    return {
      success: true,
      meals: merged.length > 0 ? merged : localDishes,
      category,
    };
  } catch (error) {
    console.error("Error fetching meals by category, using local dishes fallback:", error);
    return {
      success: true,
      meals: localDishes,
      category,
    };
  }
}

export async function getMealsByArea(area) {
  const localDishes = getDishesByCountry(area).map((d) => ({
    idMeal: d.id,
    strMeal: d.title,
    strMealThumb: d.imageUrl,
  }));

  try {
    const response = await fetch(`${MEALDB_BASE}/filter.php?a=${area}`, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!response.ok) {
      return { success: true, meals: localDishes, area };
    }

    const data = await response.json();
    const remoteMeals = data.meals || [];

    // Merge without duplicates
    const titles = new Set(remoteMeals.map((m) => m.strMeal.toLowerCase()));
    const merged = [
      ...localDishes.filter((d) => !titles.has(d.strMeal.toLowerCase())),
      ...remoteMeals,
    ];

    return {
      success: true,
      meals: merged.length > 0 ? merged : localDishes,
      area,
    };
  } catch (error) {
    console.error("Error fetching meals by area, using local dishes fallback:", error);
    return {
      success: true,
      meals: localDishes,
      area,
    };
  }
}

