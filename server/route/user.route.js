const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
} = require("../controller/user.controller");

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.patch("/:id", updateUser);

module.exports = router;
