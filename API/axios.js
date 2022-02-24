/* enlist-disable */
import axios from 'axios'

// const API_URL = 'http://localhost:3000/'
const API_URL = "https://hotelieur.herokuapp.com/"
const localhost = axios.create({
  baseURL : API_URL
})

export default localhost