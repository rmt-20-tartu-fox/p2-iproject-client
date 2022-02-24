import axios from "axios";

const origin = "http://localhost:3000";

const mainApi = axios.create({
  baseURL: origin,
});

const restaurantApi = axios.create({
  baseURL: `${origin}/restaurants`,
});

const reviewApi = axios.create({
  baseURL: `${origin}/reviews`,
});

const profileApi = axios.create({
  baseURL: `${origin}/profile`,
});

export { mainApi, restaurantApi, reviewApi, profileApi };
