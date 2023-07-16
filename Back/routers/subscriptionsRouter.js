const express = require("express");
const router = express.Router();
const subscriptionsBL = require("../models/subscriptionsBL");

router.get("/", async function (req, resp) {
  let data = await subscriptionsBL.getAllSubscriptions();
  return resp.json(data);
});

router.get("/:id", async function (req, resp) {
  let id = req.params.id;
  let data = await subscriptionsBL.getSubscription(id);
  return resp.json(data);
});

router.get("/FindByMovieID/:MovieID", async function (req, resp) {
  let MovieID = req.params.MovieID;
  let data = await subscriptionsBL.getSubscriptionByMovieID(MovieID);
  return resp.json(data);
});

router.get("/FindByMemberID/:MemberID", async function (req, resp) {
  let MemberID = req.params.MemberID;
  let data = await subscriptionsBL.getSubscriptionByMemberID(MemberID);
  return resp.json(data);
});

router.post("/:MemberID/:MovieID", async function (req, resp) {
  let MemberID = req.params.MemberID;
  let MovieID = req.params.MovieID;
  let date = req.body.Date;
  let data = await subscriptionsBL.addSubscription(MemberID, MovieID, date);
  return resp.json("Created with id: " + data);
});

router.put("/:id", async function (req, resp) {
  let obj = req.body;
  let id = req.params.id;
  await subscriptionsBL.updateSubscription(id, obj);
  return resp.json("Updated!");
});

router.delete("/:id", async function (req, resp) {
  let id = req.params.id;
  await subscriptionsBL.deleteSubscription(id);
  return resp.json("Deleted!");
});

module.exports = router;
