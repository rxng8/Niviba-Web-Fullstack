const mongoose = require('mongoose');

const DepotSchema =  mongoose.Schema({
    id: {type: String},
    name: {type: String},
    capacity: {type: int},
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

module.exports = mongoose.model("Depot", DepotSchema);