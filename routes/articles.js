const express = require("express");
const {
  getSavedArticles,
  createArticle,
  deleteArticle,
} = require("../controllers/articles");
const {
  validateArticleCreation,
  validateArticleId,
} = require("../utils/validations");

const router = express.Router();

router.get("/", getSavedArticles);
router.post("/", validateArticleCreation, createArticle);
router.delete("/:articlesId", validateArticleId, deleteArticle);

module.exports = router;
