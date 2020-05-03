const express = require('express');
const app = express();

app.get("/",(req, res, next) => {

    // executing query middleware =))
    const executeQuery = require("../middleware/executeQuery");

    // config for your database =))
    const config = require('../db/config');

    // Một query j đó =))
    const qurey = "SELECT * FROM dbo.Users"

    // connect to database thôi =))
    executeQuery(res, config, qurey);

    console.log("Get here at generateRoutes/homepage after execute query method!");

    // next();
});

app.get("/docs",(req,res) => {
    res.send("<h1>Hello World! This is docs</h1>");
});

module.exports = app