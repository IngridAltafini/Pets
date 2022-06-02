const connection = require('../../../shared/database/connections');

class PersonsRepository {
  async checkPersonsEmail(email) {
    return connection('persons').where({ email });
  }

  async createPerson(payload) {
    return connection.transaction(async trx =>
      trx('persons').insert(payload).returning('id')
    );
  }
}

module.exports = PersonsRepository;
