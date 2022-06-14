class CreateRacesService {
  constructor(racesRepository) {
    this.racesRepository = racesRepository;
  }

  async execute(payload) {
    const races = await this.racesRepository.createRaces(payload);

    return races;
  }
}

module.exports = CreateRacesService;
