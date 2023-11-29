const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { validateAuthorizationHeader } = require("../utils/validations");
const newsRouter = require("./news");
const usersRouter = require("./users");
const articlesRouter = require("./articles");

router.use("/", newsRouter);

// Middleware de validação do cabeçalho de autorização em todas as rotas após validateAuthorizationHeader
// Authorization header validation middleware for all routes after validateAuthorizationHeader
router.use(validateAuthorizationHeader);

router.use("/users", auth, usersRouter);
router.use("/articles", auth, articlesRouter);

module.exports = router;
