const mongoose = require("mongoose");

// Replace this with your MONGOURI.
let MONGOURI = require('./config').development.connectionString;
if (process.env.NODE_ENV === 'production') {
  MONGOURI = require('./config').production.connectionString;
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