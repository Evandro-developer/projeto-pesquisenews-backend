const mongoose = require("mongoose");
const { urlRegex } = require("../utils/validations");

const articleSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return urlRegex.test(value);
      },
      message: "URL inválida",
    },
  },
  urlToImage: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return urlRegex.test(value);
      },
      message: "URL da imagem inválida",
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    select: false,
  },
});

module.exports = mongoose.model("Article", articleSchema);
