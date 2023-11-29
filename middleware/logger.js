const winston = require("winston");
const expressWinston = require("express-winston");
const fs = require("fs");
const path = require("path");

const LOGS_DIRECTORY = "./logs";

// Verifica e cria o diretório de logs se ele não existir
// Checks and creates the log directory if it does not exist
if (!fs.existsSync(LOGS_DIRECTORY)) {
  fs.mkdirSync(LOGS_DIRECTORY);
}

const loggerOptions = (filename) => ({
  transports: [
    new winston.transports.File({
      filename: path.join(LOGS_DIRECTORY, filename),
    }),
  ],
  format: winston.format.json(),
});

const httpRequestLogger = expressWinston.logger(loggerOptions("/request.log"));
const httpErrorLogger = expressWinston.errorLogger(loggerOptions("/error.log"));

module.exports = { httpRequestLogger, httpErrorLogger };
