const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    description: {
      type: mongoose.Schema.Types.Mixed,
      default: "",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
      index: true,
    },
    // Optional authorClerkId if created by Clerk user
    authorClerkId: {
      type: String,
      index: true,
      sparse: true,
    },
    cuisine: {
      type: String,
      default: "other",
      trim: true,
      lowercase: true,
      index: true,
    },
    category: {
      type: String,
      default: "dinner",
      trim: true,
      lowercase: true,
      index: true,
    },
    ingredients: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      default: () => [],
    },
    instructions: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      default: () => [],
    },
    imageUrl: {
      type: String,
      default: "",
    },
    isPublic: {
      type: Boolean,
      default: true,
      index: true,
    },
    prepTime: {
      type: Number,
      default: 0,
    },
    cookTime: {
      type: Number,
      default: 0,
    },
    servings: {
      type: Number,
      default: 1,
    },
    nutrition: {
      type: mongoose.Schema.Types.Mixed,
      default: () => ({
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
      }),
    },
    tips: {
      type: mongoose.Schema.Types.Mixed,
      default: () => [],
    },
    substitutions: {
      type: mongoose.Schema.Types.Mixed,
      default: () => [],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id.toString();
        // Also provide documentId for Strapi v5 frontend compatibility
        ret.documentId = ret._id.toString();
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Virtual for saved recipes referencing this recipe
recipeSchema.virtual("savedRecipes", {
  ref: "SavedRecipe",
  localField: "_id",
  foreignField: "recipe",
});

const Recipe =
  mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;