const Message = require("../model/message.model");

const newMessage = async function (data) {
  try {
    const message = new Message(data);
    const messages = await message.save();
    return messages;
  } catch (e) {
    console.log(`ERROR newMessage: ${e}`);
  }
};

const findMessageByRoomId = async function (roomID, socketID) {
  try {
    const socket_id = await Message.findOne( {socketID, roomID})
    const messages = await Message.find( { roomID } )
    console.log(`socket_id ${socket_id}`)
    return messages;
  } catch (e) {
    console.log(`ERROR newMessage: ${e}`);
  }
};

module.exports = { newMessage, findMessageByRoomId };