const express = require('express');
const app = express();

app.get("/",(req, res, next) => {

    // executing query middleware =))
    // const executeQuery = require("../middleware/executeQuery");

    // config for your database =))
    // const config = require('../db/config').sql;

    // Một query j đó =))
    // const qurey = "SELECT * FROM dbo.Users"

    // connect to database thôi =))
    // executeQuery(res, config, qurey);

    console.log("Get here at generateRoutes/homepage after execute query method!");
    res.send("<h1>Hellooooo</h1>");
    // next();
});

app.get("/docs",(req,res) => {
    res.send("<h1>Hello World! This is docs</h1>");
});

app.get("/dashboard", (req, app, next) => {
    const user =  req.session.user,
	userId = req.session.userId;
	
	if(userId == null){
		res.redirect("/home/login");
		return;
	}
	 
	var sql="SELECT * FROM `login_details` WHERE `id`='"+userId+"'";
	 
    db.query(sql, function(err, results){
        
        console.log(results);
        console.log(req.session);
        // Render the profile of that user!
        res.send(req.session.userId);
        res.send(results[0].password);
    });	 
});

module.exports = app