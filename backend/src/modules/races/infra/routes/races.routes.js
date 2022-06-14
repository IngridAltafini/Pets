const { Router } = require('express');

const RacesController = require('../controllers/RacesController');

const racesMiddleware = require('../../middleware/races.middleware');

const racesRoutes = Router();
const racesController = new RacesController();

racesRoutes.get('/', racesController.getAllRaces);

racesRoutes.post(
  '/',
  racesMiddleware.VerifyPayloadForCreation,
  racesMiddleware.VerifyDescriptionAlreadyExists,
  racesController.createRaces
);

racesRoutes.put('/', racesController.updateRaces);

racesRoutes.delete('/', racesController.deleteRaces);

module.exports = racesRoutes;
