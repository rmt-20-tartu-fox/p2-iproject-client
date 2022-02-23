import axios from "axios";

// base Url
const API_URL = "http://localhost:3000";

// Instance axios
const instance = axios.create({
  baseURL: API_URL,
});

export default instance;
