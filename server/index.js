// Import and Variables
const express = require('express');
const app = express();
const PORT = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const bodyParser = require('body-parser');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

// Routes
const generalRoutes = require("./routes/generalRoutes");
const loginRoutes = require("./routes/loginRoutes")
app.use(generalRoutes);
app.use(loginRoutes);
// Listen
app.listen(PORT, () => {
    console.log("Server is running in port", PORT);
})