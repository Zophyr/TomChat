const DB = require("../tool/db");
const upsert = require("../tool/knex-upsert");

const getAllRooms = async (bot) => {
  const allRooms = await bot.Room.findAll();
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

module.exports.onReady = function () {
  return (wechaty) => {
    wechaty.on("ready", async () => {
      console.log("wechaty ready");
      await getAllRooms(wechaty);
    });
  };
};
