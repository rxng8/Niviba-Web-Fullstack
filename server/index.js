// Import and Variables
const express = require('express');
const app = express();
// const PORT = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const PORT = 8080;
const bodyParser = require('body-parser');
const InitiateMongoServer = require("./db/db");

// Initiate Mongo Server
InitiateMongoServer();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS Middleware
app.use(require('./middleware/cors'))

// Routes
const generalRoutes = require("./routes/generalRoutes");
const loginRoutes = require("./routes/loginRoutes");
const registerRoutes = require("./routes/loginRoutes");
const userMongo = require('./routes/user(mongo)');
app.use(generalRoutes);
app.use(loginRoutes);
app.use(registerRoutes);
app.use(userMongo);

// Listen
app.listen(PORT, () => {
    console.log("Server is running in port", PORT);
})