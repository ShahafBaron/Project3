import axios from "axios";

const url = "http://localhost:8000/api";

const userPost = async (Username, Password) => {
  let user = { Username, Password };
  let data = await axios.post(`${url}/users/login`, user);
  if (data.data.Full_name) {
    return data.data.Full_name;
  } else {
    return false;
  }
};

const getAllMovies = async () => {
  let resp = await axios.get(`${url}/movies`);
  return resp;
};

const getSingleMovie = async (MovieID) => {
  let resp = await axios.get(`${url}/movies/${MovieID}`);
  return resp;
};

const addMovieToDB = async (obj) => {
  let resp = await axios.post(`${url}/movies`, obj);
  return resp;
};

const deleteSingleMovie = async (MovieID) => {
  let resp = await axios.delete(`${url}/movies/${MovieID}`);
  return resp;
};

const editMovie = async (MovieID, obj) => {
  let resp = await axios.put(`${url}/movies/${MovieID}`, obj);
  return resp;
};

const getAllMembers = async () => {
  let resp = await axios.get(`${url}/members`);
  return resp;
};

const getSingleMember = async (MemberID) => {
  let resp = await axios.get(`${url}/members/${MemberID}`);
  return resp;
};

const addMemberToDB = async (obj) => {
  let resp = await axios.post(`${url}/members`, obj);
  return resp;
};

const deleteSingleMember = async (MemberID) => {
  let resp = await axios.delete(`${url}/members/${MemberID}`);
  return resp;
};

const editMember = async (MemberID, obj) => {
  let resp = await axios.put(`${url}/members/${MemberID}`, obj);
  return resp;
};

const getSubWatched = async (MovieID) => {
  let resp = await axios.get(`${url}/subscriptions/FindByMovieID/${MovieID}`);
  return resp;
};

const getSubTo = async (MemberID) => {
  let resp = await axios.get(`${url}/subscriptions/FindByMemberID/${MemberID}`);
  return resp;
};

const addSubscription = async (MemberID, MovieID, obj) => {
  let resp = await axios.post(
    `${url}/subscriptions/${MemberID}/${MovieID}`,
    obj
  );
  return resp;
};

export default {
  userPost,
  getAllMovies,
  getSingleMovie,
  getSubWatched,
  addMovieToDB,
  deleteSingleMovie,
  getAllMembers,
  getSingleMember,
  editMovie,
  getSubTo,
  addMemberToDB,
  deleteSingleMember,
  editMember,
  addSubscription,
};
