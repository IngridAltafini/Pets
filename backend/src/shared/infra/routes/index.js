const { Router } = require('express');

const personsRoutes = require('../../../modules/persons/infra/routes/persons.routes');
const sessionsRoutes = require('../../../modules/persons/infra/routes/sessions.routes');

const petsRoutes = require('../../../modules/pets/infra/routes/pets.routes');

const transactionsRoutes = require('../../../modules/transactions/infra/routes/transactions.routes');

const racesRoutes = require('../../../modules/races/infra/routes/races.routes');

const routes = Router();

routes.use('/pets', petsRoutes);

routes.use('/persons', personsRoutes);

routes.use('/login', sessionsRoutes);

routes.use('/transactions', transactionsRoutes);

routes.use('/races', racesRoutes);

module.exports = routes;
