import axios from "axios";
const midtrans = "https://api.sandbox.midtrans.com";

const instance = axios.create({
  baseURL: midtrans,
});

export default instance;
