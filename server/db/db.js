const mongoose = require("mongoose");

// Replace this with your MONGOURI.
let MONGOURI = require('./config').mongo_without_docker.connectionString;
if (process.env.USE_DOCKER === 'TRUE') {
  MONGOURI = require('./config').mongo_with_docker.connectionString;
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