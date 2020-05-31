const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({
    id: {type: String},
    name: {type: String},
    address: {type: String},
    demand: {type: Number},
    coordinates: {
        lat: {type: Number},
        lng: {type: Number}
    },
    time_window: {
        start: {type: Number},
        end: {type: Number}
    }
});

module.exports = mongoose.model("Location", LocationSchema, "Location");