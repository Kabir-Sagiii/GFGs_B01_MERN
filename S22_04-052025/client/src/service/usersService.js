import axios from "axios";

export const createUser = (data) => {
  return axios.post("http://localhost:9898/api/users/signup", data);
};

export const loginUser = (data) => {
  return axios.post("http://localhost:9898/api/users/signin", data);
};
