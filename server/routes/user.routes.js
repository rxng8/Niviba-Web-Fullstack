

const express = require("express");
const app = express();
const UserController = require('../controllers/user.controller.js');

/**
 * @method - POST
 * @param - /users
 * @description - User SignUp
 */

app.post('/users', UserController.create);

app.get('/users', UserController.findAll);

app.get('/users/:userId', UserController.findOne);

app.put('/users/:userId', UserController.update);

app.delete('/users/:userId', UserController.delete);

module.exports = app;