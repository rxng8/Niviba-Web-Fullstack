//Function to connect to database and execute query

const sql = require('mssql');

module.exports = function (res, dbConfig, query) {

    console.log("To beginning of sql executing query function!");

    sql.connect(dbConfig, function (err) {
        if (err) {   
            console.log("Error while connecting database :- " + err);
            res.send(err);
        }
        else {
            // create Request object
            var request = new sql.Request();

            // query to the database
            request.query(query, (err, res) => {
                if (err) {
                    console.log("Error while querying database :- " + err);
                    res.send(err);
                } else {
                    res.send(res);
                    sql.close();
                }
            });
        }
    });
    
    console.log("To last of sql executing query function before next()!");
}