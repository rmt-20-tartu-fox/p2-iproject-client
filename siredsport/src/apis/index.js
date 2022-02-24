import axios from "axios";

const instance = axios.create({
  baseURL: "https://secret-coast-21323.herokuapp.com",
});

export default instance;


