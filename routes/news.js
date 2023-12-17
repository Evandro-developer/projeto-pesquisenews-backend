const express = require("express");
const router = express.Router();
const { searchNews } = require("../controllers/news");
const { validateSearchNews } = require("../utils/validations");

router.get("/", validateSearchNews, searchNews);

module.exports = router;
