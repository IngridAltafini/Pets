const { Router } = require('express');

const PetsController = require('../controllers/PetsController');

const petsRoutes = Router();
const petsController = new PetsController();

petsRoutes.get('/', petsController.getAllPets);

petsRoutes.post('/', petsController.createPets);

petsRoutes.put('/', petsController.updatePets);

petsRoutes.delete('/', petsController.deletePets);

module.exports = petsRoutes;
