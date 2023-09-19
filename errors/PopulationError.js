const BaseError = require('./BaseError');

class PopulationError extends BaseError {
  constructor(message) {
    super(message || 'Falha ao preencher o cartão.');
    this.name = 'PopulationError';
    this.statusCode = 500;
  }
}

module.exports = PopulationError;
