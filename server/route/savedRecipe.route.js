const express = require('express');
const {
  saveRecipe,
  getSavedRecipes,
  getSavedRecipeById,
  deleteSavedRecipe,
} = require('../controller/savedRecipe.controller');

const router = express.Router();

router.post('/', saveRecipe);
router.get('/', getSavedRecipes);
router.get('/:id', getSavedRecipeById);
router.delete('/:id', deleteSavedRecipe);

module.exports = router;
