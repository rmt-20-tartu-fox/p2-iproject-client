import axios from "axios";

const dating = axios.create({
  // baseURL: "https://ridhasidi-wolfy.herokuapp.com/",
  baseURL: "http://localhost:3000",
});

export default dating;
