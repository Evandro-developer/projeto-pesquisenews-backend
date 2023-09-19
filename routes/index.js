const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { validateAuthorizationHeader } = require("../utils/validations");
const newsRouter = require("./news");
const usersRouter = require("./users");
const articlesRouter = require("./articles");

router.use("/", newsRouter);
router.use("/users", auth, validateAuthorizationHeader, usersRouter);
router.use("/articles", auth, validateAuthorizationHeader, articlesRouter);

module.exports = router;
