require("dotenv").config();
const express = require("express");
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
const PORT = process.env.PORT;

const corsOptions = {
  origin: [
    "https://pesquisenews.com.br",
    "https://api.pesquisenews.com.br",
    "https://www.pesquisenews.com.br",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

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
app.use(httpRequestLogger);

// Aplica o limitador de taxa a todas as rotas
app.use(limiter);

app.post("/signup", validateUserSignup, createUser);

app.post("/signin", validateUserSignin, userLogin);

// Define as rotas principais usando o middleware "routes"
app.use("/", routes);

// Middleware de log de erros
app.use(httpErrorLogger);

// Tratador de erros de validação do Celebrate
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
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || "Erro interno do servidor.";

  console.error(err.stack); // Stacktrace para todos os erros, para depuração

  return res.status(status).json({
    status: "error",
    error: message,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escutando em http://127.0.0.1:${PORT}`);
});

module.exports = app;
