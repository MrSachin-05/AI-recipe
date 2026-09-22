const mongoose = require("mongoose");
const SavedRecipe = require("../database/savedRecipe.database");
const User = require("../database/user.database");
const Recipe = require("../database/recipe.database");
const { isDbConnected } = require("../config/db");
const { getQueryVal } = require("../utils/query");

const memorySaved = new Map();

const unwrapData = (body) => (body && body.data ? body.data : body || {});

// Helper to resolve user ID from MongoDB _id or Clerk ID
async function resolveUserId(userParam) {
  if (!userParam) return null;
  let rawId = typeof userParam === "object" && userParam.id ? userParam.id : userParam;
  rawId = String(rawId).trim();

  if (rawId.startsWith("user_")) {
    if (isDbConnected()) {
      const userDoc = await User.findOne({ clerkId: rawId });
      if (userDoc) return userDoc._id;
    }
    return rawId;
  }

  if (mongoose.Types.ObjectId.isValid(rawId)) {
    return new mongoose.Types.ObjectId(rawId);
  }

  return rawId;
}

// Helper to resolve recipe ID
async function resolveRecipeId(recipeParam) {
  if (!recipeParam) return null;
  let rawId = typeof recipeParam === "object" && recipeParam.id ? recipeParam.id : recipeParam;
  rawId = String(rawId).trim();

  if (mongoose.Types.ObjectId.isValid(rawId)) {
    return new mongoose.Types.ObjectId(rawId);
  }

  return rawId;
}

// Save a recipe (bookmark)
exports.saveRecipe = async (req, res) => {
  try {
    const payload = unwrapData(req.body);
    const userParam = payload.user || payload.userId;
    const recipeParam = payload.recipe || payload.recipeId;
    const savedAt = payload.savedAt ? new Date(payload.savedAt) : new Date();

    const userId = await resolveUserId(userParam);
    const recipeId = await resolveRecipeId(recipeParam);

    if (!userId || !recipeId) {
      return res.status(400).json({
        success: false,
        message: "Valid User and Recipe references are required",
      });
    }

    if (!isDbConnected()) {
      const existing = Array.from(memorySaved.values()).find(
        (s) => String(s.user) === String(userId) && String(s.recipe?.id || s.recipe) === String(recipeId)
      );

      if (existing) {
        return res.status(200).json({ success: true, alreadySaved: true, data: existing });
      }

      const id = new mongoose.Types.ObjectId().toString();
      const mockSaved = {
        id,
        _id: id,
        documentId: id,
        user: userId,
        recipe: { id: recipeId, _id: recipeId },
        savedAt,
        createdAt: new Date().toISOString(),
      };
      memorySaved.set(id, mockSaved);
      return res.status(201).json({ success: true, data: mockSaved });
    }

    // Check if already saved in MongoDB
    let saved = await SavedRecipe.findOne({ user: userId, recipe: recipeId });
    if (saved) {
      await saved.populate("recipe");
      return res.status(200).json({
        success: true,
        alreadySaved: true,
        data: saved,
      });
    }

    saved = await SavedRecipe.create({
      user: userId,
      recipe: recipeId,
      savedAt,
    });

    await saved.populate("recipe");

    return res.status(201).json({
      success: true,
      data: saved,
    });
  } catch (error) {
    const id = new mongoose.Types.ObjectId().toString();
    const fallbackSaved = {
      id,
      _id: id,
      documentId: id,
      user: req.body?.user || req.body?.userId,
      recipe: req.body?.recipe || req.body?.recipeId,
      savedAt: new Date(),
    };
    memorySaved.set(id, fallbackSaved);
    return res.status(201).json({ success: true, data: fallbackSaved });
  }
};

// Get saved recipes (supports filters[user][id][$eq] and filters[recipe][id][$eq])
exports.getSavedRecipes = async (req, res) => {
  try {
    const userFilter =
      getQueryVal(req.query, ["filters", "user", "id", "$eq"]) ||
      getQueryVal(req.query, ["filters", "user", "$eq"]) ||
      req.query?.userId ||
      req.query?.user;

    const recipeFilter =
      getQueryVal(req.query, ["filters", "recipe", "id", "$eq"]) ||
      getQueryVal(req.query, ["filters", "recipe", "$eq"]) ||
      req.query?.recipeId ||
      req.query?.recipe;

    if (!isDbConnected()) {
      let list = Array.from(memorySaved.values());
      if (userFilter) {
        list = list.filter(
          (s) => String(s.user) === String(userFilter) || s.user?.clerkId === userFilter || s.user?.id === userFilter
        );
      }
      if (recipeFilter) {
        list = list.filter(
          (s) => String(s.recipe?.id || s.recipe) === String(recipeFilter)
        );
      }
      return res.status(200).json({ success: true, data: list, count: list.length });
    }

    const query = {};

    if (userFilter) {
      const resolvedUser = await resolveUserId(userFilter);
      if (resolvedUser) {
        query.user = resolvedUser;
      } else {
        return res.status(200).json({ success: true, data: [] });
      }
    }

    if (recipeFilter) {
      const resolvedRecipe = await resolveRecipeId(recipeFilter);
      if (resolvedRecipe) {
        query.recipe = resolvedRecipe;
      } else {
        return res.status(200).json({ success: true, data: [] });
      }
    }

    const savedRecipes = await SavedRecipe.find(query)
      .populate("recipe")
      .populate("user", "username email firstName lastName imageUrl clerkId")
      .sort({ savedAt: -1, createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: savedRecipes,
      count: savedRecipes.length,
    });
  } catch (error) {
    let list = Array.from(memorySaved.values());
    return res.status(200).json({ success: true, data: list, count: list.length });
  }
};

// Get single saved recipe by ID
exports.getSavedRecipeById = async (req, res) => {
  try {
    if (!isDbConnected()) {
      const saved = memorySaved.get(req.params.id);
      if (!saved) return res.status(404).json({ success: false, message: "Saved recipe not found" });
      return res.status(200).json({ success: true, data: saved });
    }

    const saved = await SavedRecipe.findById(req.params.id)
      .populate("recipe")
      .populate("user", "username email firstName lastName imageUrl clerkId");

    if (!saved) {
      return res.status(404).json({ success: false, message: "Saved recipe not found" });
    }

    return res.status(200).json({ success: true, data: saved });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Delete saved recipe by ID
exports.deleteSavedRecipe = async (req, res) => {
  try {
    if (!isDbConnected()) {
      const saved = memorySaved.get(req.params.id);
      if (saved) memorySaved.delete(req.params.id);
      return res.status(200).json({
        success: true,
        data: saved || { id: req.params.id },
        message: "Saved recipe removed successfully",
      });
    }

    const saved = await SavedRecipe.findByIdAndDelete(req.params.id);
    if (!saved) {
      return res.status(404).json({ success: false, message: "Saved recipe not found" });
    }

    return res.status(200).json({
      success: true,
      data: saved,
      message: "Saved recipe removed successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Unsave by user & recipe parameters
exports.unsaveRecipe = async (req, res) => {
  try {
    const { userId: userParam, recipeId: recipeParam } = req.body;
    const userId = await resolveUserId(userParam);
    const recipeId = await resolveRecipeId(recipeParam);

    if (!userId || !recipeId) {
      return res.status(400).json({ success: false, message: "User and Recipe are required" });
    }

    if (!isDbConnected()) {
      for (const [key, val] of memorySaved.entries()) {
        if (String(val.user) === String(userId) && String(val.recipe?.id || val.recipe) === String(recipeId)) {
          memorySaved.delete(key);
          return res.status(200).json({ success: true, message: "Recipe removed from your collection" });
        }
      }
      return res.status(404).json({ success: false, message: "Recipe was not in your collection" });
    }

    const saved = await SavedRecipe.findOneAndDelete({ user: userId, recipe: recipeId });
    if (!saved) {
      return res.status(404).json({ success: false, message: "Recipe was not in your collection" });
    }

    return res.status(200).json({
      success: true,
      message: "Recipe removed from your collection",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
