const BaseError = require('./BaseError');

class AuthError extends BaseError {
  constructor(message) {
    super(message || 'Falha na autenticação');
    this.name = 'AuthError';
    this.statusCode = 401;
  }
}

module.exports = AuthError;
