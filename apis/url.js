import axios from "axios";

const instance = axios.create({
  baseURL: "https://afternoon-reef-54014.herokuapp.com",
});

export default instance;
