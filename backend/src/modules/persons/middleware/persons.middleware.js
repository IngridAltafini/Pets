const PersonsRepository = require('../repositories/PersonsRepository');

const AppError = require('../../../shared/errors/AppError');

const personsRepository = new PersonsRepository();

module.exports = {
  verifyPayloadForCreation(request, response, next) {
    const { name, email, whatsapp, password, cep } = request.body;

    if (!name) {
      throw new AppError('name not found');
    }

    if (!email) {
      throw new AppError('email not found');
    }

    if (!whatsapp) {
      throw new AppError('whatsapp not found');
    }

    if (!password) {
      throw new AppError('password not found');
    }

    if (!cep) {
      throw new AppError('cep not found');
    }

    next();
  },

  async verifyIfEmailAlreadyExists(request, response, next) {
    const { email } = request.body;

    const emailExists = await personsRepository.checkPersonsEmail(email);

    if (emailExists) throw new Error('email already exists');

    next();
  },
};
