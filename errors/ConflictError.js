const BaseError = require('./BaseError');

class ConflictError extends BaseError {
  constructor(message) {
    super(message || 'Conflito detectado');
    this.name = 'ConflictError';
    this.statusCode = 409;
  }
}

module.exports = ConflictError;
