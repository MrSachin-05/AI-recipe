const SavedRecipe = require('../database/savedRecipe.database');

exports.saveRecipe = async (req, res) => {
  try {
    const savedRecipe = await SavedRecipe.create(req.body);
    res.status(201).json({ success: true, data: savedRecipe });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getSavedRecipes = async (req, res) => {
  try {
    const query = {};
    if (req.query.userId) {
      query.userId = req.query.userId;
    }

    const savedRecipes = await SavedRecipe.find(query).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: savedRecipes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getSavedRecipeById = async (req, res) => {
  try {
    const savedRecipe = await SavedRecipe.findById(req.params.id);
    if (!savedRecipe) {
      return res.status(404).json({ success: false, message: 'Saved recipe not found' });
    }
    res.status(200).json({ success: true, data: savedRecipe });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteSavedRecipe = async (req, res) => {
  try {
    const savedRecipe = await SavedRecipe.findByIdAndDelete(req.params.id);
    if (!savedRecipe) {
      return res.status(404).json({ success: false, message: 'Saved recipe not found' });
    }
    res.status(200).json({ success: true, message: 'Saved recipe removed successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
