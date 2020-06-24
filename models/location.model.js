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
        start: {type: Date},
        end: {type: Date}
    }
});

module.exports = mongoose.model("Location", LocationSchema, "Location");