const mongoose = require("mongoose");
const cloudinary = require("../config/cloudinary");
const Recipe = require("../database/recipe.database");
const User = require("../database/user.database");
const { isDbConnected } = require("../config/db");

const memoryRecipes = new Map();

const unwrapData = (body) => (body && body.data ? body.data : body || {});

// Upload image to Cloudinary
exports.uploadRecipeImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image file provided" });
    }

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "recipe-images" },
        (error, uploadResult) => {
          if (error) return reject(error);
          resolve(uploadResult);
        }
      );
      stream.end(req.file.buffer);
    });

    return res.status(200).json({
      success: true,
      imageUrl: result.secure_url,
      publicId: result.public_id,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Create a new recipe
exports.createRecipe = async (req, res) => {
  try {
    const payload = unwrapData(req.body);

    if (!payload.title) {
      return res.status(400).json({ success: false, message: "Recipe title is required" });
    }

    let resolvedAuthor = null;
    let authorClerkId = null;

    if (payload.author) {
      if (typeof payload.author === "object" && payload.author.id) {
        payload.author = payload.author.id;
      }
      if (typeof payload.author === "string") {
        if (payload.author.startsWith("user_")) {
          authorClerkId = payload.author;
          if (isDbConnected()) {
            const userDoc = await User.findOne({ clerkId: authorClerkId });
            if (userDoc) resolvedAuthor = userDoc._id;
          }
        } else if (mongoose.Types.ObjectId.isValid(payload.author)) {
          resolvedAuthor = payload.author;
        }
      }
    }

    const recipeData = {
      title: payload.title.trim(),
      description: payload.description || "",
      cuisine: (payload.cuisine || "other").toLowerCase().trim(),
      category: (payload.category || "dinner").toLowerCase().trim(),
      ingredients: payload.ingredients || [],
      instructions: payload.instructions || [],
      imageUrl: payload.imageUrl || "",
      isPublic: payload.isPublic !== undefined ? Boolean(payload.isPublic) : true,
      prepTime: Number(payload.prepTime) || 0,
      cookTime: Number(payload.cookTime) || 0,
      servings: Number(payload.servings || payload.serving) || 1,
      nutrition: payload.nutrition || {},
      tips: payload.tips || [],
      substitutions: payload.substitutions || payload.substitution || [],
      author: resolvedAuthor || payload.author || undefined,
      authorClerkId: authorClerkId || undefined,
    };

    if (!isDbConnected()) {
      const id = new mongoose.Types.ObjectId().toString();
      const mockRecipe = {
        id,
        _id: id,
        documentId: id,
        ...recipeData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      memoryRecipes.set(id, mockRecipe);
      return res.status(201).json({ success: true, data: mockRecipe });
    }

    const recipe = await Recipe.create(recipeData);

    return res.status(201).json({
      success: true,
      data: recipe,
    });
  } catch (error) {
    const payload = unwrapData(req.body);
    const id = new mongoose.Types.ObjectId().toString();
    const fallbackRecipe = {
      id,
      _id: id,
      documentId: id,
      title: payload.title || "Recipe",
      ...payload,
      createdAt: new Date().toISOString(),
    };
    memoryRecipes.set(id, fallbackRecipe);
    return res.status(201).json({ success: true, data: fallbackRecipe });
  }
};

// Get recipes with advanced filtering, case-insensitive search, and Strapi compatibility
exports.getAllRecipes = async (req, res) => {
  try {
    const eqiTitle = req.query?.["filters[title][$eqi]"];
    const containsiTitle =
      req.query?.["filters[title][$containsi]"] ||
      req.query?.title ||
      req.query?.search;
    const cuisine = req.query?.["filters[cuisine][$eq]"] || req.query?.cuisine;
    const category = req.query?.["filters[category][$eq]"] || req.query?.category;
    const isPublic = req.query?.["filters[isPublic][$eq]"] || req.query?.isPublic;

    const pageSize =
      Number(
        req.query?.["pagination[pageSize]"] ||
        req.query?.pageSize ||
        req.query?.limit
      ) || 50;

    const page =
      Number(
        req.query?.["pagination[page]"] ||
        req.query?.page
      ) || 1;

    if (!isDbConnected()) {
      let list = Array.from(memoryRecipes.values());
      if (eqiTitle) {
        const target = eqiTitle.trim().toLowerCase();
        list = list.filter((r) => r.title?.toLowerCase() === target);
      } else if (containsiTitle) {
        const target = containsiTitle.trim().toLowerCase();
        list = list.filter((r) => r.title?.toLowerCase().includes(target));
      }
      if (cuisine && cuisine !== "all") {
        list = list.filter((r) => r.cuisine?.toLowerCase() === cuisine.toLowerCase());
      }
      if (category && category !== "all") {
        list = list.filter((r) => r.category?.toLowerCase() === category.toLowerCase());
      }
      if (isPublic !== undefined) {
        const flag = isPublic === "true" || isPublic === true;
        list = list.filter((r) => Boolean(r.isPublic) === flag);
      }

      return res.status(200).json({
        success: true,
        data: list.slice((page - 1) * pageSize, page * pageSize),
        meta: {
          pagination: {
            page,
            pageSize,
            pageCount: Math.ceil(list.length / pageSize),
            total: list.length,
          },
        },
      });
    }

    const query = {};

    if (eqiTitle) {
      query.title = new RegExp(`^${eqiTitle.trim()}$`, "i");
    } else if (containsiTitle) {
      query.title = new RegExp(containsiTitle.trim(), "i");
    }

    if (cuisine && cuisine !== "all") {
      query.cuisine = cuisine.toLowerCase().trim();
    }

    if (category && category !== "all") {
      query.category = category.toLowerCase().trim();
    }

    if (isPublic !== undefined) {
      query.isPublic = isPublic === "true" || isPublic === true;
    }

    const skip = (page - 1) * pageSize;

    let sort = { createdAt: -1 };
    const sortParam = req.query?.sort;
    if (sortParam) {
      if (sortParam.includes("publishedAt:desc") || sortParam.includes("createdAt:desc")) {
        sort = { createdAt: -1 };
      } else if (sortParam.includes("createdAt:asc")) {
        sort = { createdAt: 1 };
      } else if (sortParam.includes("title:asc")) {
        sort = { title: 1 };
      }
    }

    const recipes = await Recipe.find(query)
      .populate("author", "username email firstName lastName imageUrl")
      .sort(sort)
      .skip(skip)
      .limit(pageSize);

    const total = await Recipe.countDocuments(query);

    return res.status(200).json({
      success: true,
      data: recipes,
      meta: {
        pagination: {
          page,
          pageSize,
          pageCount: Math.ceil(total / pageSize),
          total,
        },
      },
    });
  } catch (error) {
    let list = Array.from(memoryRecipes.values());
    return res.status(200).json({
      success: true,
      data: list,
      meta: { pagination: { page: 1, pageSize: 50, pageCount: 1, total: list.length } },
    });
  }
};

// Get single recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
    if (!isDbConnected()) {
      const recipe = memoryRecipes.get(req.params.id);
      if (!recipe) return res.status(404).json({ success: false, message: "Recipe not found" });
      return res.status(200).json({ success: true, data: recipe });
    }

    const recipe = await Recipe.findById(req.params.id).populate(
      "author",
      "username email firstName lastName imageUrl"
    );

    if (!recipe) {
      return res.status(404).json({ success: false, message: "Recipe not found" });
    }

    return res.status(200).json({
      success: true,
      data: recipe,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Update recipe by ID
exports.updateRecipe = async (req, res) => {
  try {
    const payload = unwrapData(req.body);

    if (!isDbConnected()) {
      const recipe = memoryRecipes.get(req.params.id);
      if (!recipe) return res.status(404).json({ success: false, message: "Recipe not found" });
      Object.assign(recipe, payload);
      return res.status(200).json({ success: true, data: recipe });
    }

    const recipe = await Recipe.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true,
    });

    if (!recipe) {
      return res.status(404).json({ success: false, message: "Recipe not found" });
    }

    return res.status(200).json({ success: true, data: recipe });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// Delete recipe by ID
exports.deleteRecipe = async (req, res) => {
  try {
    if (!isDbConnected()) {
      const recipe = memoryRecipes.get(req.params.id);
      if (recipe) memoryRecipes.delete(req.params.id);
      return res.status(200).json({
        success: true,
        data: recipe || { id: req.params.id },
        message: "Recipe deleted successfully",
      });
    }

    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(404).json({ success: false, message: "Recipe not found" });
    }

    return res.status(200).json({
      success: true,
      data: recipe,
      message: "Recipe deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
