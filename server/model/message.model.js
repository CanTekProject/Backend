var mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  text: String,
  nickName: String,
  id: String,
  socketID: String,
  roomID: Number
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
