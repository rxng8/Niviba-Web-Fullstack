const axios = require('axios');
require("express-validator/check");

// Solution controller

exports.solve = async (req, res) => {
    let url = "#";
    await axios.get(url)
        .then((res) => {
            console.log("Made a request to" + url);
        })
        .catch((err) => {
            console.log(err);
        });

    res.send("<h2>Hello</h2>");
}
