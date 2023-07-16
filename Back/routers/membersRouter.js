const express = require("express");
const router = express.Router();
const membersBL = require("../models/membersBL");

function once(fn, context) {
  var result;

  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }

    return result;
  };
}

const getMembersFromAPI = once(async () => {
  let resp = await membersBL.getAllMembersFromAPI();
  return resp;
});

router.get("/", async function (req, resp) {
  let data = await membersBL.getAllMembers();
  return resp.json(data);
});

router.get("/:id", async function (req, resp) {
  let id = req.params.id;
  let data = await membersBL.getMember(id);
  return resp.json(data);
});

router.post("/", async function (req, resp) {
  let obj = req.body;
  let memberid = await membersBL.addMember(obj);
  return resp.json("Created with id: " + memberid);
});

router.put("/:id", async function (req, resp) {
  let obj = req.body;
  let id = req.params.id;
  await membersBL.updateMember(id, obj);
  return resp.json("Updated!");
});

router.delete("/:id", async function (req, resp) {
  let id = req.params.id;
  await membersBL.deleteMember(id);
  return resp.json("Deleted!");
});

module.exports = router;
module.exports = getMembersFromAPI;
