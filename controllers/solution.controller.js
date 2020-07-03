const axios = require('axios');
require("express-validator/check");
const request = require('request');

// Solution controller

exports.solve = async (req, res) => {
    // let url = "http://localhost:5555/routing";
    let url = "http://7b857d957582.ngrok.io/routing"
    let request_data_JSON = req.body;
    let request_data = JSON.stringify(request_data_JSON);
    // console.log(request_data);
    // res.send(request_data)
    const options = {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        data: request_data,
        url: url,
    };
    
    let solution_object;

    await axios(options)
        .then((solution) => {
            console.log("Making a request to " + url);
            solution_object = solution;
        })
        .catch((err) => {
            console.log(err);
        });

    if (solution_object) {
        console.log(solution_object.data)
        res.send(solution_object.data);
    } else {
        res.send("<h2>Failed to make request to the AI server</h2>");
    }
}
