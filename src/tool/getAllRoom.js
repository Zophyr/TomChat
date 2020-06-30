const DB = require("./db");
const upsert = require("./knex-upsert");

module.exports = async (bot) => {
  const allRooms = await bot.Room.findAll();
  console.log(allRooms);
  let db = DB;
  allRooms.forEach(async (element) => {
    upsert({
      db,
      table: "room",
      object: {
        roomId: element.payload.id,
        ownerId: element.payload.ownerId,
        topic: element.payload.topic,
      },
      key: "roomId",
    });
  });
};
