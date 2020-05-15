const mongoose = require('mongoose');

const VehicleSchema = mongoose.Schema({
    vehicle_id: {type: String},
    vehicle_capacity: {type: Number},
    depot: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Depot"
        }
    ]
});

module.exports = mongoose.model("Vehicle", VehicleSchema);