const dbConfig = require("../../config/knexfile");
const Knex = require("knex");

const DB = Knex(dbConfig.development);

module.exports = DB;