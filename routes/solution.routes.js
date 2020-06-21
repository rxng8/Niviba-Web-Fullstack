

const express = require("express");
const app = express();
const SolutionController = require('../controllers/solution.controller.js');

app.post('/solve', SolutionController.solve);

module.exports = app;