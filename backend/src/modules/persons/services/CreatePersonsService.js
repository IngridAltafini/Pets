class CreatePersonsService {
  constructor(personsRepository) {
    this.personsRepository = personsRepository;
  }

  async execute(payload) {
    const person = await this.createPerson(payload);

    return person;
  }
}

module.exports = CreatePersonsService;
