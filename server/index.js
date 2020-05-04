// Import and Variables
const express = require('express');
const app = express();
const PORT = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const bodyParser = require('body-parser');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS Middleware
app.use(require('./middleware/cors'))

// Routes
const generalRoutes = require("./routes/generalRoutes");
const loginRoutes = require("./routes/loginRoutes");
const registerRoutes = require("./routes/loginRoutes");
app.use(generalRoutes);
app.use(loginRoutes);
app.use(registerRoutes);

// Listen
app.listen(PORT, () => {
    console.log("Server is running in port", PORT);
})