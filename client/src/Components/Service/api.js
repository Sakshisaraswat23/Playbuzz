import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
// const usersUrl = `http://localhost:${PORT}/api`;

export const getUsers = async (id) => {
  id = id || "";
  // console.log("inside get fun");
  return await axios.get(`/api/${id}`);
};
export const addUser = async (user) => {

  return await axios.post(`/api/add`, user);
};
export const editUser = async (id, user) => {
  return await axios.put(`/api/${id}`, user);
};

export const getcount = async () => {
  console.log("inside getcount");
  return await axios.get(`/api/countmatches`);
};

export const matchList = async (page, checked, radio) => {
  console.log("hello");
  console.log(checked);
  return await axios.post(`/api/pagefilter/${page}`, { checked, radio });
};

export const matchfilter = async (checked, radio) => {
  return await axios.post(`/api/match-filters`, { checked, radio });
};

export const addliked_matches = async (id, matchId) => {
  console.log(matchId);
  return await axios.post(`/api/addliked_matches/${id}`, { matchId });
};
