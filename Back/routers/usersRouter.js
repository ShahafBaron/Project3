const express = require("express");
const router = express.Router();
const usersBL = require("../models/usersBL");

router.get("/", async function (req, resp) {
  let data = await usersBL.getAllUsers();
  return resp.json(data);
});

router.get("/:id", async function (req, resp) {
  let id = req.params.id;
  let data = await usersBL.getUser(id);
  return resp.json(data);
});

router.post("/", async function (req, resp) {
  let obj = req.body;
  let userid = await usersBL.addUser(obj);
  return resp.json("Created with id: " + userid);
});

router.post("/login", async function (req, resp) {
  let validUser = await usersBL.findUser(req.body.Username, req.body.Password);
  return resp.json(validUser);
});

router.put("/:id", async function (req, resp) {
  let obj = req.body;
  let id = req.params.id;
  await usersBL.updateUser(id, obj);
  return resp.json("Updated!");
});

router.delete("/:id", async function (req, resp) {
  let id = req.params.id;
  await usersBL.deleteUser(id);
  return resp.json("Deleted!");
});

module.exports = router;
