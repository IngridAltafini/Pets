const connection = require('../../../shared/database/connections');

class RacesRepository {
  async checkRacesDescription(description) {
    return connection('races').where({ description });
  }

  async createRaces(payload) {
    return connection.transaction(async trx =>
      trx('races').insert(payload).returning('id')
    );
  }
}

module.exports = RacesRepository;
