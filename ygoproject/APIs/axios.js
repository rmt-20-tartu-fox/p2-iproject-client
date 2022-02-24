import axios from "axios";
// http://localhost:3000
// https://projectyugap2.herokuapp.com/
const instance = axios.create({
  baseURL: 'https://projectyugap2.herokuapp.com'

});

export default instance;