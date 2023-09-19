const express = require("express");
const router = express.Router();
const { getNews } = require("../controllers/news");
const { validateGetNews } = require("../utils/validations");

router.get("/", validateGetNews, getNews);

module.exports = router;
