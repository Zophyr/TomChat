const getAllRooms = require("../tool/getAllRoom");

module.exports = (bot) => {
  return async function onReady() {
    getAllRooms(bot);
  };
};
