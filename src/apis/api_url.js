import axios from "axios";

// base Url
const API_URL = "https://smd-movie-iproject.herokuapp.com";

// Instance axios
const instance = axios.create({
  baseURL: API_URL,
});

export default instance;
