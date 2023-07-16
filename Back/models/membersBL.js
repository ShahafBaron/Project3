const Member = require("./membersSchema");
const Subscription = require("./subscriptionsSchema");
const axios = require("axios");

const getAllMembersFromAPI = async () => {
  let resp = await axios.get("https://jsonplaceholder.typicode.com/users");

  resp.data.map((obj) => {
    let member = {
      Full_name: obj.name,
      Email: obj.email,
      City: obj.address.city,
    };
    addMember(member);
  });
  return resp.data;
};

const getAllMembers = async () => {
  let data = await Member.find({});
  return data;
};

const getMember = async (id) => {
  let data = await Member.findById(id);
  return data;
};

const addMember = async (obj) => {
  let member = new Member({
    Full_name: obj.Full_name,
    Email: obj.Email,
    City: obj.City,
  });

  await member.save();
  return member._id;
};

const updateMember = async (id, obj) => {
  await Member.findByIdAndUpdate(id, {
    Full_name: obj.Full_name,
    Email: obj.Email,
    City: obj.City,
  });
};

const deleteMember = async (id) => {
  await Member.findByIdAndRemove(id);
  await Subscription.deleteMany({ MemberID: id });
};

module.exports = {
  getAllMembers,
  getMember,
  updateMember,
  deleteMember,
  addMember,
  getAllMembersFromAPI,
};
