import axios from "axios";

export const client = axios.create({
  baseURL: 'http://api.weatherstack.com',
});
