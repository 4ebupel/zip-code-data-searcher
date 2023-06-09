import axios from 'axios';

// export const getInfo = (zip) => {
//   return axios.get(`https://api.tomorrow.io/v4/weather/forecast?location=${zip}&timesteps=1d&units=metric&apikey=TUzTweSdassA6U6IR6Yb54i4pxXVtFmf`)
// API is broken but I won't delete this in case everything will be okay in the future
// };

export const getLocationInfo = (zip) => {
  return axios.get(`https://api.zippopotam.us/us/${zip}`)
};

export const getIp = () => {
  return axios.get('https://ipinfo.io/json?token=2b816b218384cc');
};

export const getWeatherInfo = (zip) => {
  return axios.get(`https://api.weatherbit.io/v2.0/current?postal_code=${zip}&key=c9cd0745f86441aabd010abe00e95053`);
};

// export const getOtherData = () => {
//   const key = 'iFcaDbVj9mR3yr0VNe20XCmvjVUSw4TuGrvBeJQbCev63pfcTvXzrcHBceelgB4v3AlKACKF';
//   const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36';
//   return axios.get(`https://api.useragent.app/parse?key=${key}&ua=${userAgent}`);
// }
