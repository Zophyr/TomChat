const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  roomId: { type: String },
  ownerId: { type: String },
  topic: { type: String },
  member: [{ type: String }],
});

module.exports = mongoose.model("Room", RoomSchema);
