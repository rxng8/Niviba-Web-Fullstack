// Load env
require('dotenv').config();
// Import and Variables
const express = require('express');
const app = express();
// const PORT = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const PORT = 8080;
const bodyParser = require('body-parser');
const InitiateMongoServer = require("./db/db");


// Initiate Mongo Server
InitiateMongoServer();
// app.use((req, res, next) => {
//     console.log("Log before use");
//     next();
// })
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS Middleware
app.use(require('./middleware/cors'))

// Routes
const indexRoute = require("./routes/index.routes");
const loginRoutes = require("./routes/loginRoutes");
const user = require('./routes/user.routes');
const location = require('./routes/location.routes');
const depot = require('./routes/depot.routes');
const vehicle = require('./routes/vehicle.routes');
app.use(indexRoute);
app.use(loginRoutes);
app.use(user);
app.use(location);
app.use(depot);
app.use(vehicle);

// Listen
app.listen(PORT, () => {
    console.log("Server is running in port", PORT);
})