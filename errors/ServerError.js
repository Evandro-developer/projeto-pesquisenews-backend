const BaseError = require('./BaseError');

class ServerError extends BaseError {
  constructor(message) {
    super(message || 'Ocorreu um erro no servidor');
    this.name = 'ServerError';
    this.statusCode = 500;
  }
}

module.exports = ServerError;
