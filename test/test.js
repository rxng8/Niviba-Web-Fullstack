const DepotModel = require('../models/depot.model.js')
const VehicleModel = require('../models/vehicle.model.js')
const bodyParser = require('body-parser');
const InitiateMongoServer = require("../db/db");
const axios = require('axios');

// Initiate Mongo Server
InitiateMongoServer();

run = async function() {
    
    let list = await VehicleModel.find()
    let depots = await DepotModel.find();
    // addVehicle(depotId, list)
    let id = depots[0]._id
    addVehicle(id, list);
}

let addVehicle = async (depotId, vehicle) => {
    let url = "http://localhost:8080/depots/addVehicle";
    let request_data = {
        depot_id: depotId,
        vehicle: vehicle
    }
    // request_data = JSON.stringify(request_data)
    const options = {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: request_data,
        url: url,
    };

    await axios(options)
        .then((res) => {
            
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });

}

run();