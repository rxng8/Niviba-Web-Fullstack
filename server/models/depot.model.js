const mongoose = require('mongoose');

const DepotSchema =  mongoose.Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    capacity: {type: Number, required: true},
    address: {type: String},
    coordinates: {
        lat: {type: Number},
        lng: {type: Number}
    },
    time_window: {
        start: {type: Number},
        end: {type: Number}
    },
    vehicle: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicle"
        }
    ]
});

module.exports = mongoose.model("Depot", DepotSchema, "Depot");