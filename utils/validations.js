const { celebrate, Joi } = require("celebrate");
const validator = require("validator");

const urlRegex =
  /^(https?:\/\/)?(www\.)?[\w\d.-]+(:\d+)?(\/[\w\d._~:/?%#[\]@!$&'()*+,;=-]*)?(#\w*)?$/i;
const emailRegex = /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,100}$/;
const queryRegex = /^.{2,40}$/;

exports.urlRegex = urlRegex;
exports.emailRegex = emailRegex;
exports.passwordRegex = passwordRegex;
exports.queryRegex = queryRegex;

exports.validatePassword = (value, helpers) => {
  if (passwordRegex.test(value)) {
    return value;
  }
  return helpers.error("string.pattern.base", { pattern: passwordRegex });
};

exports.validateQuery = (value, helpers) => {
  if (queryRegex.test(value)) {
    return value;
  }
  return helpers.error("string.pattern.base", { pattern: queryRegex });
};

exports.validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error("string.uri");
};

exports.validateAuthorizationHeader = celebrate({
  headers: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
});

exports.validateUserSignup = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().pattern(exports.emailRegex),
    password: Joi.string()
      .required()
      .custom(exports.validatePassword, "Senha inválida"),
    name: Joi.string().min(2).max(30).optional(),
  }),
});

exports.validateUserSignin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().pattern(exports.emailRegex),
    password: Joi.string().required(),
  }),
});

exports.validateSearchNews = celebrate({
  query: Joi.object().keys({
    q: Joi.string().required().custom(exports.validateQuery, "Busca inválida"),
    lang: Joi.string().required(),
  }),
});

exports.validateArticleCreation = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    publishedAt: Joi.string().required(),
    source: Joi.string().required(),
    url: Joi.string().required().custom(exports.validateURL, "URL inválida"),
    urlToImage: Joi.string()
      .required()
      .custom(exports.validateURL, "URL da imagem inválida"),
    lang: Joi.string().required(),
  }),
});

exports.validateArticleId = celebrate({
  params: Joi.object({
    articlesId: Joi.string()
      .required()
      .regex(/^[0-9a-fA-F]{24}$/),
  }),
});
