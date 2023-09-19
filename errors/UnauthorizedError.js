const BaseError = require('./BaseError');

class UnauthorizedError extends BaseError {
  constructor(message) {
    super(message || 'Erro de autorização');
    this.name = 'UnauthorizedError';
    this.statusCode = 401;
  }
}

module.exports = UnauthorizedError;
