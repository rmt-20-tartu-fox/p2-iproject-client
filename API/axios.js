/* enlist-disable */
import axios from 'axios'

const API_URL = 'http://localhost:3000/'
// const API_URL = "https://branded-things-02022022.herokuapp.com/pubs/"
const localhost = axios.create({
  baseURL : API_URL
})

export default localhost