// Filename : userRoutes.js

const express = require("express");
const app = express();
const UserController = require('../controllers/user.controller.js');

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

// Create a new Note
app.post('/users', UserController.create);

// Retrieve all Notes
app.get('/users', UserController.findAll);

// Retrieve a single Note with noteId
app.get('/users/:userId', UserController.findOne);

// Update a Note with noteId
app.put('/users/:userId', UserController.update);

// Delete a Note with noteId
app.delete('/users/:userId', UserController.delete);

module.exports = app;