const express = require("express");
const {
  saveRecipe,
  getSavedRecipes,
  getSavedRecipeById,
  deleteSavedRecipe,
  unsaveRecipe,
} = require("../controller/savedRecipe.controller");

const router = express.Router();

router.post("/unsave", unsaveRecipe);
router.post("/", saveRecipe);
router.get("/", getSavedRecipes);
router.get("/:id", getSavedRecipeById);
router.delete("/:id", deleteSavedRecipe);

module.exports = router;
