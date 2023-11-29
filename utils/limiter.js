const rateLimit = require("express-rate-limit");

// Configura do limitador de taxa
// Configures the rate limiter
const limiter = rateLimit({
  // Define o período de solicitações em 15 minutos
  // Sets the request window to 15 minutes
  windowMs: 15 * 60 * 1000,
  // Define o número máximo de solicitações por IP
  // Sets the maximum number of requests per IP
  max: 100,
  message: "You have reached the request limit. Please try again later.",
});

module.exports = limiter;
