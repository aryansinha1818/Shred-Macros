const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/auth");
const {
  getRecipes,
  addRecipe,
  editRecipe,
  deleteRecipe,
  getRecipe,
  upload,
  getMyRecipes,
} = require("../controller/recipe.controller");

router.get("/", getRecipes);
router.get("/myRecipe", verifyToken, getMyRecipes); // Only my recipes ✅✅✅

router.get("/", getRecipes);

router.get("/:id", getRecipe);

router.post("/", upload.single("file"), verifyToken, addRecipe);

router.put("/:id", upload.single("file"), editRecipe);

router.delete("/:id", deleteRecipe);

module.exports = router;
