const DepotModel = require('../models/depot.model.js');
const { check, validationResult} = require("express-validator/check");


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
    
    DepotModel.findById(req.params.depotId)
        .then(depot => {
            if(!depot) {
                return res.status(404).send({
                    message: "Depot not found with id " + req.params.depotId
                });            
            }
            res.send(depot);
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