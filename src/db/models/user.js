const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  name: { type: String },
  weixinId: { type: String },
  userId: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
