const express = require("express");
const app = express();
const VehicleController = require('../controllers/vehicle.controller.js');

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

app.post('/vehicles', VehicleController.create);

app.get('/vehicles', VehicleController.findAll);

app.get('/vehicles/:vehicleId', VehicleController.findOne);

app.put('/vehicles/:vehicleId', VehicleController.update);

app.delete('/vehicles/:vehicleId', VehicleController.delete);

app.post('vehicles/addDepot', VehicleController.addDepot);

module.exports = app;