import axios from 'axios';

const BASE_URL = 'https://api.happi.dev/';

const happi = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: 'dd7c34D7PzsOzBeELviUw6ohEuB75gJ1x7oPaz3GMUHGBQ2GaDvqh3AJ',
    width: 120,
    bg: 'FFFFFF',
    dots: '000000'
  }
});

export default happi;