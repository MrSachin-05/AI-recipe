const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    cuisine: {
        type: String,
        required: true,
        trim: true,
        enum: ["Indian", "Italian", "Chinese", "Mexican", "Other"],
    },
    category: {
        type: String,
        required: true,
        trim: true,
        enum: ["Veg", "Non-Veg", "Vegan", "Dessert", "Snack"],
    },
    ingredients: {
        type: [String],
        required: true,
    },
    instructions: {
        type: [String],
        required: true,
    },
    imageUrl: {
        type: String,
        default: "",
    },
    isPublic: {
        type: Boolean,
        default: true,
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
        calories: { type: Number, default: 0 },
        protein: { type: Number, default: 0 },
        carbs: { type: Number, default: 0 },
        fat: { type: Number, default: 0 },
    },
    tips: {
        type: [String],
        default: [],
    },
    substitutions: {
        type: [String],
        default: [],
    },
}, { timestamps: true });

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;