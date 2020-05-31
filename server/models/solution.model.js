const mongoose = require('mongoose');

const SolutionSchema = mongoose.Schema({
        dropped_nodes: [],
        route: [
          {
            load: {type: Number},
            steps: [
              {
                location_id: {type: Number},
                time_range: {
                  end: {type: Number},
                  start: {type: Number}
                }
              }
            ],
            time: {type: Number},
            vehicle_id: {type: Number}
          }
        ],
        total_load: {type: Number},
        total_time: {type: Number}
});

module.exports = mongoose.Model("Solution", SolutionSchema, "Solution");

