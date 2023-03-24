import axios from "axios";

export const client = axios.create({
  baseURL: 'https://api.tomorrow.io/v4/weather',
});
