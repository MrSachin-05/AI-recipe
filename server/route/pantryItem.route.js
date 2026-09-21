const express = require("express");
const {
  createPantryItem,
  batchCreatePantryItems,
  getPantryItems,
  getPantryItemById,
  updatePantryItem,
  deletePantryItem,
} = require("../controller/pantryItem.controller");

const router = express.Router();

router.post("/batch", batchCreatePantryItems);
router.post("/", createPantryItem);
router.get("/", getPantryItems);
router.get("/:id", getPantryItemById);
router.put("/:id", updatePantryItem);
router.patch("/:id", updatePantryItem);
router.delete("/:id", deletePantryItem);

module.exports = router;
