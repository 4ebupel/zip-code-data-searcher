import { client } from "../httpClient"
// import axios from "axios";

export const getInfo = (zip) => {
  // const params = {
  //   access_key: '6d61bdcbeed61f15a150ba4d1d0d5956',
  //   query: zip
  // }
  // return client.get(`/current`, { params })
  //   .then(response => {
  //     const apiResponse = response.data;
  //     return apiResponse;
  //   }).catch(error => {
  //     console.log(error);
  //   });

  return fetch(`http://api.weatherstack.com/current?access_key=6d61bdcbeed61f15a150ba4d1d0d5956&query=${zip}`)
  .then(response => response.json);
};
