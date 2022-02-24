import axios from "axios";

const instance = axios.create({
  baseURL: 'https://fdns-library.herokuapp.com'
});

export default instance