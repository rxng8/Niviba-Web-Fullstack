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
        let depot = await DepotModel.findOne({ id });
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
    DepotModel.findOne({ id })
        .then(depot => {
            if(!depot) {
                return res.status(404).send({
                    message: "Depot not found with id " + req.params.id
                });            
            }
            res.send(depot);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Depot not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving Depot with id " + req.params.id
            });
        })
};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {
    
};