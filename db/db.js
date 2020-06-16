const mongoose = require("mongoose");

dbConfig = require('./config');

// Replace this with your MONGOURI.
let MONGOURI = dbConfig.mongo_without_docker.connectionString;
if (process.env.USE_DOCKER === 'TRUE') {
  MONGOURI = dbConfig.mongo_with_docker.connectionString;
} else if (process.env.NODE_ENV === 'PRODUCTION') {
  MONGOURI = dbConfig.mongo_production.connectionString;
}

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;