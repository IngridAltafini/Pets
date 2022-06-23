const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const PersonsController = require('../controllers/PersonsController');

const personsMiddleware = require('../../middleware/persons.middleware');

const personsRoutes = Router();
const personsController = new PersonsController();

personsRoutes.get('/', personsController.getAllPersons);

personsRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required('name is required'),
      email: Joi.string().email().required('email is required'),
      whatsapp: Joi.string().required('whatsapp is required'),
      cep: Joi.string().required('cep is required'),
      password: Joi.string().min(6).required('password is required'),
    },
  }),
  personsMiddleware.verifyIfEmailAlreadyExists,
  personsController.createPersons
);

personsRoutes.put('/', personsController.updatePersons);

personsRoutes.delete('/', personsController.deletePersons);

module.exports = personsRoutes;
