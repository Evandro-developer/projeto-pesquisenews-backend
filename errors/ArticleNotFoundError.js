const BaseError = require("./BaseError");

class ArticleNotFoundError extends BaseError {
  constructor(message) {
    super(message || "Artigo não encontrado");
    this.name = "ArticleNotFoundError";
    this.statusCode = 404;
  }
}

module.exports = ArticleNotFoundError;
