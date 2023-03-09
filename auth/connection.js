const mongoose = require("mongoose");

const connect = async (URI) => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDb connected!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
