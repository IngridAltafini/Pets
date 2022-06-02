const PersonsRepository = require('../repositories/PersonsRepository');

const personsRepository = new PersonsRepository();

module.exports = {
  verifyPayloadForCreation(request, response, next) {
    const { name, email, whatsapp, password, cep } = request.body;

    if (!name) {
      throw new Error('name not found');
    }

    if (!email) {
      throw new Error('email not found');
    }

    if (!whatsapp) {
      throw new Error('whatsapp not found');
    }

    if (!password) {
      throw new Error('password not found');
    }

    if (!cep) {
      throw new Error('cep not found');
    }

    next();
  },

  async verifyIfEmailAlreadyExists(request, response, next) {
    const { email } = request.body;

    const emailExists = await personsRepository.checkPersonEmail(email);

    if (!emailExists) throw new Error('email already exists');

    next();
  },
};
