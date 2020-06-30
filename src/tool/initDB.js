const DB = require("./db");

async function initDB() {
  console.log("---init DB---");
  let isExitRoom = await DB.schema.hasTable("room");
  if (!isExitRoom) {
    await DB.schema.createTable("room", (table) => {
      table.string("roomId");
      table.string("ownerId");
      table.string("topic");
      table.unique("roomId")
    });
  }
}

module.exports = {
  initDB,
};
