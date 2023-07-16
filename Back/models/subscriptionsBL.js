const { find } = require("./moviesSchema");
const Subscription = require("./subscriptionsSchema");
const Member = require("./membersSchema");
const Movie = require("./moviesSchema");
const { json } = require("express");

const getAllSubscriptions = async () => {
  let data = await Subscription.find({});
  return data;
};

const getSubscription = async (id) => {
  let data = await Subscription.findById(id);
  return data;
};

const getSubscriptionByMovieID = async (MovieID) => {
  let data = await Subscription.find({ MovieID: MovieID });
  let forSubWatched = [];

 await Promise.all(
  data.map(async (item) => {
    let data2 = await Member.findById(item.MemberID)
    forSubWatched.push({SubscriptionID: item._id, MemberID: data2._id, Full_name: data2.Full_name, Date: item.Date });
  })
  )
  return forSubWatched
};

const getSubscriptionByMemberID = async (MemberID) => {
  let data = await Subscription.find({ MemberID: MemberID });
  let forSubWatched = [];

 await Promise.all(
  data.map(async (item) => {
    let data2 = await Movie.findById(item.MovieID)
    
    forSubWatched.push({SubscriptionID: item._id, MovieID: data2._id, Name: data2.Name, Date: item.Date });
  })
  )
  return forSubWatched
};

const addSubscription = async (MemberID, MovieID, date) => {
  let movie = await Movie.findById(MovieID);
  let member = await Member.findById(MemberID);
  let subscription = new Subscription({
    MovieID: movie,
    MemberID: member,
    Date: date,
  });

  await subscription.save();
  return subscription._id;
};

const updateSubscription = async (id, obj) => {
  await Subscription.findByIdAndUpdate(id, {
    MovieID: obj.MovieID,
    MemberID: obj.MemberID,
    Date: obj.Date,
  });
};

const deleteSubscription = async (id) => {
  await Subscription.findByIdAndRemove(id);
};

module.exports = {
  getAllSubscriptions,
  getSubscription,
  updateSubscription,
  deleteSubscription,
  addSubscription,
  getSubscriptionByMovieID,
  getSubscriptionByMemberID
};
