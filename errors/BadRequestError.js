const BaseError = require('./BaseError');

class BadRequestError extends BaseError {
  constructor(message) {
    super(message || 'Solicitação inválida');
    this.name = 'BadRequestError';
    this.statusCode = 400;
  }
}

module.exports = BadRequestError;
