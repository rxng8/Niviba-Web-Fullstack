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
app.post('/notes', UserController.create);

// Retrieve all Notes
app.get('/notes', UserController.findAll);

// Retrieve a single Note with noteId
app.get('/notes/:noteId', UserController.findOne);

// Update a Note with noteId
app.put('/notes/:noteId', UserController.update);

// Delete a Note with noteId
app.delete('/notes/:noteId', UserController.delete);

module.exports = app;