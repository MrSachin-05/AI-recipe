const mongoose = require("mongoose");

const savedRecipeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    recipe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
      required: true,
      index: true,
    },
    savedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id.toString();
        ret.documentId = ret._id.toString();
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Prevent duplicate saved recipes by the same user
savedRecipeSchema.index({ user: 1, recipe: 1 }, { unique: true });

const SavedRecipe =
  mongoose.models.SavedRecipe ||
  mongoose.model("SavedRecipe", savedRecipeSchema);

module.exports = SavedRecipe;
