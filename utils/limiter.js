const rateLimit = require("express-rate-limit");

// Configura do limitador de taxa
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Define o período de solicitações em 15 minutos
  max: 100, // Define o número máximo de solicitações por IP
  message: "Você atingiu o limite de solicitações. Tente novamente mais tarde.",
});

module.exports = limiter;
