const { celebrate, Joi } = require("celebrate");
const validator = require("validator");

const urlRegex =
  /^(https?:\/\/)?(www\.)?[\w\d.-]+(:\d+)?(\/[\w\d._~:/?%#[\]@!$&'()*+,;=-]*)?(#\w*)?$/i;

const emailRegex = /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}$/;

exports.urlRegex = urlRegex;
exports.emailRegex = emailRegex;

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

exports.validateGetNews = celebrate({
  query: Joi.object({
    q: Joi.string().required().min(1),
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
  }),
});

exports.validateArticleId = celebrate({
  params: Joi.object({
    articlesId: Joi.string()
      .required()
      .regex(/^[0-9a-fA-F]{24}$/),
  }),
});

exports.validateUserSignup = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().pattern(emailRegex),
    password: Joi.string().min(6).required(),
    name: Joi.string().min(2).max(30).optional(),
  }),
});

exports.validateUserSignin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});
