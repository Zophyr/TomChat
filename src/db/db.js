const mongoose = require("mongoose");

const dbConfig = require("../../config/mongo.config");

mongoose.connect(dbConfig.mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const DB = mongoose.connection;

module.exports = DB;
