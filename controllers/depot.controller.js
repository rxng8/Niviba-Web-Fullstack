const DepotModel = require('../models/depot.model.js');
const { check, validationResult} = require("express-validator/check");
const { model } = require('../models/depot.model.js');

/**
 * 
 * @param {ObjectId} depot_id 
 * @param {Vehicle[]} vehicle 
 */
exports.addVehicle = async function (req, res) {

    const {depot_id, vehicle} = req.body;
    // console.log(typeof vehicle)
    // console.log(typeof depot_id)
    for (let v of vehicle) {
        try {
            let depot = await DepotModel.findByIdAndUpdate(depot_id, { $push: { vehicle: v._id} }, { new: true, useFindAndModify: false, useUnifiedTopology: true });
            if (!depot) {
                return res.status(404).send({
                    message: "Error in saving to depot " + depot_id
                }); 
            }
        } catch(err) {
            console.log(err.message);
            res.status(500).send("Error in finding depot to insert vehicle!");
            continue;
        }
        console.log("Added vehicle " + v._id);
    }
    
    res.send("Added successfully!")
}




exports.create = async (req, res) => {
    const {
        id,
        name,
        capacity,
        address,
        coordinates,
        time_window,
        vehicle
    } = req.body

    try {
        let depot = await DepotModel.findOne({ id:id });
        if (depot) {
            return res.status(400).json({
                msg: "Depot Already Exists"
            });
        }

        depot = new DepotModel({
            id,
            name,
            capacity,
            address,
            coordinates,
            time_window,
            vehicle
        });

        await depot.save().then(depot => {
            res.status(200).json({
                depot
            });
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }

};

exports.findAll = (req, res) => {
    DepotModel.find()
        .then(depot => {
            res.send(depot);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occur when retrieving all depots."
            })
        });
};

exports.findOne = (req, res) => {
    // console.log("Meow meow")
    DepotModel.findById(req.params.depotId)
        .then(depot => {
            if(!depot) {
                return res.status(404).send({
                    message: "Depot not found with id " + req.params.depotId
                });            
            }
            res.send(depot);
            // console.log("Meow meow")
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Depot not found with id " + req.params.depotId
                });
            }
            return res.status(500).send({
                message: "Error retrieving Depot with id " + req.params.depotId
            });
        })
};

exports.update = (req, res) => {
    // Validate Request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Depot content can not be empty"
    //     });
    // }

    const {
        id,
        name,
        capacity,
        address,
        coordinates,
        time_window,
        vehicle
    } = req.body

    DepotModel.findByIdAndUpdate(req.params.depotId, {
        id: id,
        name: name,
        capacity: capacity,
        address: address,
        coordinates: coordinates,
        time_window: time_window,
        vehicle: vehicle
    }, {new: true})
    .then(depot => {
        if(!depot) {
            return res.status(404).send({
                message: "Depot not found with id " + req.params.depotId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Depot not found with id " + req.params.depotId
            });                
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.depotId
        });
    });
};

exports.delete = (req, res) => {
    DepotModel.findByIdAndRemove(req.params.depotId)
    .then(depot => {
        if(!depot) {
            return res.status(404).send({
                message: "depot not found with id " + req.params.depotId
            });
        }
        res.send({message: "depot deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "depot not found with id " + req.params.depotId
            });                
        }
        return res.status(500).send({
            message: "Could not delete depot with id " + req.params.depotId
        });
    });
};