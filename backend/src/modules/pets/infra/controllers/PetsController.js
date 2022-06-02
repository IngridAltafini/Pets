class PetsController {
  async createPets(request, response) {
    return response.json({ create: true });
  }

  async getAllPets(request, response) {
    return response.json({ getAll: true });
  }

  async updatePets(request, response) {
    return response.json({ update: true });
  }

  async deletePets(request, response) {
    return response.json({ delete: true });
  }
}

module.exports = PetsController;
