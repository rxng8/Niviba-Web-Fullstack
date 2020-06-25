const VehicleModel = require('../models/vehicle.model.js');
const {check, validationResult} = require("express-validator/check");

exports.create = async (req, res) => {
    const {
        vehicle_id,
        vehicle_capacity,
        depot
    } = req.body

    try {
        let vehicle = await VehicleModel.findOne({ vehicle_id:vehicle_id });
        if (vehicle) {
            return res.status(400).json({
                msg: "vehicle Already Exists"
            });
        }

        vehicle = new VehicleModel({
            vehicle_id: vehicle_id,
            vehicle_capacity: vehicle_capacity,
            depot: depot
        });

        await vehicle.save().then(vehicle => {
            res.status(200).json({
                vehicle
            });
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }

};

exports.findAll = (req, res) => {
    
    VehicleModel.find()
        .then(vehicle => {
            res.send(vehicle);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occur when retrieving all vehicles."
            })
        });
};

exports.findOne = (req, res) => {
    
    VehicleModel.findById(req.params.vehicleId)
        .then(vehicle => {
            if(!vehicle) {
                return res.status(404).send({
                    message: "vehicle not found with id " + req.params.vehicleId
                });            
            }
            res.send(depot);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "vehicle not found with id " + req.params.vehicleId
                });
            }
            return res.status(500).send({
                message: "Error retrieving vehicle with id " + req.params.vehicleId
            });
        })
};

exports.update = (req, res) => {
    // Validate Request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "vehicle content can not be empty"
    //     });
    // }

    const {
        vehicle_id,
        vehicle_capacity,
        depot
    } = req.body

    VehicleModel.findByIdAndUpdate(req.params.vehicleId, {
        vehicle_id: vehicle_id,
        vehicle_capacity: vehicle_capacity,
        depot: depot
    }, {new: true})
    .then(depot => {
        if(!depot) {
            return res.status(404).send({
                message: "Depot not found with id " + req.params.vehicleId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Depot not found with id " + req.params.vehicleId
            });                
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.vehicleId
        });
    });
};

exports.delete = (req, res) => {
    DepotModel.findByIdAndRemove(req.params.vehicleId)
    .then(depot => {
        if(!depot) {
            return res.status(404).send({
                message: "depot not found with id " + req.params.vehicleId
            });
        }
        res.send({message: "depot deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "depot not found with id " + req.params.vehicleId
            });
        }
        return res.status(500).send({
            message: "Could not delete depot with id " + req.params.vehicleId
        });
    });
};