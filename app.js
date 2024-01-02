require("dotenv").config();
const express = require("express");
const compression = require("compression");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const celebrate = require("celebrate");
const { httpRequestLogger, httpErrorLogger } = require("./middleware/logger");
const limiter = require("./utils/limiter");
const routes = require("./routes/index");
const { createUser, userLogin } = require("./controllers/users");
const {
  validateUserSignup,
  validateUserSignin,
} = require("./utils/validations");

const app = express();
app.use(compression());

// Configuração de Ambiente Dinâmica: Adapta automaticamente as configurações, incluindo CORS, (desenvolvimento ou produção)
// Dynamic Environment Configuration: Automatically adapts settings, including CORS, (development or production)
const { PORT } = process.env;
const isProduction = process.env.NODE_ENV === "production";

const corsOptions = {
  origin: [
    "https://api.pesquisenews.com.br",
    "https://pesquisenews.com.br",
    "https://www.pesquisenews.com.br",
  ],
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(isProduction ? corsOptions : {}));
app.options("*", cors(isProduction ? corsOptions : {}));

app.use(helmet());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão com o MongoDB bem-sucedida!");
  })
  .catch((error) => {
    console.error("Erro na conexão com o MongoDB:", error);
  });

// Middleware de log de requisições
// Request logging middleware
app.use(httpRequestLogger);

// Aplica o limitador de taxa a todas as rotas
// Apply the rate limiter to all routes

// app.use(limiter);

app.post("/signup", validateUserSignup, createUser);
app.post("/signin", validateUserSignin, userLogin);

// Define as rotas principais usando o middleware "routes"
// Define the main routes using the "routes" middleware
app.use(routes);

// Middleware de log de erros
// Error logging middleware
app.use(httpErrorLogger);

// Tratador de erros de validação do Celebrate
// Celebrate validation error handler
app.use((err, req, res, next) => {
  if (celebrate.isCelebrateError(err)) {
    const errors = err.details;
    let errorMessage = "Erro de validação: ";
    errors.forEach(({ message }) => {
      errorMessage += `${message}, `;
    });

    return res.status(400).json({
      status: "error",
      error: errorMessage,
    });
  }
  next(err);
});

// Tratador de erros personalizado
// Custom error handler
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || "Erro interno do servidor.";

  // Stacktrace para todos os erros, para depuração
  // Stacktrace for all errors, for debugging
  console.error(err.stack);

  return res.status(status).json({
    status: "error",
    error: message,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escutando em http://127.0.0.1:${PORT}`);
});

module.exports = app;
