const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/microbloging";

const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set("strictQuery", false);
    console.log("Connected to MongoDB using mongoose");
  } catch (err) {
    console.log("Error while connecting to db");
    console.log(err);
  }
};

module.exports = connectUsingMongoose;
