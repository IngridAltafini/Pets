const RacesRepository = require('../repositories/RacesRepoisitory');

const racesRepository = new RacesRepository();

module.exports = {
  VerifyPayloadForCreation(request, response, next) {
    const { description } = request.body;

    if (!description) {
      throw new Error('description not found');
    }

    next();
  },

  async VerifyDescriptionAlreadyExists(request, response, next) {
    const { description } = request.body;

    const descriptionExists = await racesRepository.checkRacesDescription(
      description
    );

    if (!descriptionExists) throw new Error('description already exists');

    next();
  },
};
