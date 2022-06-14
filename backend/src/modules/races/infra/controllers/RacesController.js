const CreateRacesService = require('../../services/CreateRacesService');

const RacesRepoisitory = require('../../repositories/RacesRepoisitory');

const racesRepository = new RacesRepoisitory();

class RacesController {
  async createRaces(request, response) {
    const { description } = request.body;

    const createRaces = new CreateRacesService(racesRepository);

    const races = await createRaces.execute({
      description,
    });

    return response.json({ create: true });
  }

  async getAllRaces(request, response) {
    return response.json({ getAll: true });
  }

  async updateRaces(request, response) {
    return response.json({ update: true });
  }

  async deleteRaces(request, response) {
    return response.json({ delete: true });
  }
}

module.exports = RacesController;
