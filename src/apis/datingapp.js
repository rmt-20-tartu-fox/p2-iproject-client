import axios from "axios";

const dating = axios.create({
  baseURL: "http://localhost:3000/",
});

export default dating;
