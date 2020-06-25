const LocationModel = require('../models/location.model.js');
const { check, validationResult} = require("express-validator/check");

exports.create = async (req, res) => {
    const {
        id,
        name,
        address,
        demand,
        coordinates,
        time_window
    } = req.body
    
    try {
        let location = await LocationModel.findOne({ id:id });
        if (location) {
            return res.status(400).json({
                msg: "location Already Exists"
            });
        }

        location = new LocationModel({
            id: id,
            name: name,
            address: address,
            demand: demand,
            coordinates: coordinates,
            time_window: time_window
        });

        await location.save().then(location => {
            res.status(200).json({
                location
            });
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }

};

exports.findAll = (req, res) => {
    
    LocationModel.find()
        .then(location => {
            res.send(location);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occur when retrieving all locations."
            })
        });
};

exports.findOne = (req, res) => {
    
    LocationModel.findById(req.params.locationId)
        .then(location => {
            if(!location) {
                return res.status(404).send({
                    message: "location not found with id " + req.params.locationId
                });            
            }
            res.send(location);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "location not found with id " + req.params.locationId
                });
            }
            return res.status(500).send({
                message: "Error retrieving location with id " + req.params.locationId
            });
        })
};

exports.update = (req, res) => {
    // Validate Request
    // if(!req.body) {
    //     return res.status(400).send({
    //         message: "vehicle content can not be empty"
    //     });
    // }

    const {
        id,
        name,
        address,
        demand,
        coordinates,
        time_window
    } = req.body

    LocationModel.findByIdAndUpdate(req.params.locationId, {
        id: id,
        name: name,
        address: address,
        demand: demand,
        coordinates: coordinates,
        time_window: time_window
    }, {new: true})
    .then(location => {
        if(!location) {
            return res.status(404).send({
                message: "location not found with id " + req.params.locationId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "location not found with id " + req.params.locationId
            });                
        }
        return res.status(500).send({
            message: "Error updating location with id " + req.params.locationId
        });
    });
};

exports.delete = (req, res) => {
    LocationModel.findByIdAndRemove(req.params.locationId)
    .then(location => {
        if(!location) {
            return res.status(404).send({
                message: "location not found with id " + req.params.locationId
            });
        }
        res.send({message: "location deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "location not found with id " + req.params.locationId
            });
        }
        return res.status(500).send({
            message: "Could not delete location with id " + req.params.locationId
        });
    });
};