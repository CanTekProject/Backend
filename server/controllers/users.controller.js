const User = require("../model/user.model");

const newUser = async function (data) {
  try {
    const user = new User(data);
    const users = await user.save();
    return users;
  } catch (e) {
    console.log(`ERROR newUser: ${e}`);
  }
};

module.exports = { newUser };
