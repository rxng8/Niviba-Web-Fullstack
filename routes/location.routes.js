const express = require("express");
const app = express();
const LocationController = require('../controllers/location.controller.js');

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

app.post('/locations', LocationController.create);

app.get('/locations', LocationController.findAll);

app.get('/locations/:locationId', LocationController.findOne);

app.put('/locations/:locationId', LocationController.update);

app.delete('/locations/:locationId', LocationController.delete);

module.exports = app;