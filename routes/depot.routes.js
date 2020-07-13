const express = require("express");
const app = express();
const DepotController = require('../controllers/depot.controller.js');

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

app.post('/depots', DepotController.create);

app.get('/depots', DepotController.findAll);

app.get('/depots/:depotId', DepotController.findOne);

app.put('/depots/:depotId', DepotController.update);

app.delete('/depots/:depotId', DepotController.delete);

app.post('/depots/addVehicle/', DepotController.addVehicle);

module.exports = app;