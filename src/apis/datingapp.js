import axios from "axios";

const dating = axios.create({
  baseURL: "https://ridhasidi-wolfy.herokuapp.com/",
});

export default dating;
