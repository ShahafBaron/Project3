const { json } = require("express");
const User = require("./usersSchema");

const getAllUsers = async () => {
  let data = await User.find({});
  return data;
};

const getUser = async (id) => {
  let data = await User.findById(id);
  return data;
};

const findUser = async (name, password) => {
  let validUser = await User.findOne({ Username: name, Password: password });
  if (validUser){
  return validUser;
  }
  else {
    return {valid: "false"}
  }
};

const addUser = async (obj) => {
  let user = new User({
    Full_name: obj.Full_name,
    Username: obj.Username,
    Password: obj.Password,
  });

  await user.save();
  return user._id;
};

const updateUser = async (id, obj) => {
  await User.findByIdAndUpdate(id, {
    Full_name: obj.Full_name,
    Username: obj.Username,
    Password: obj.Password,
  });
};

const deleteUser = async (id) => {
  await User.findByIdAndRemove(id);
};

module.exports = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  addUser,
  findUser,
};
