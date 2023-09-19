const BaseError = require('./BaseError');

class UserNotFoundError extends BaseError {
  constructor(message) {
    super(message || 'Erro, usuário não encontrado');
    this.name = 'UserNotFoundError';
    this.statusCode = 404;
  }
}

module.exports = UserNotFoundError;
