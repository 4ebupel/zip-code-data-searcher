import axios from 'axios';

export const getInfo = (zip) => {
  return axios.get(`https://api.tomorrow.io/v4/weather/forecast?location=${zip}&timesteps=1d&units=metric&apikey=TUzTweSdassA6U6IR6Yb54i4pxXVtFmf`)

};

export const getIp = () => {
  return axios.get('https://api.ipify.org?format=json&callback=getIP');
};

export const getOtherData = () => {
  const key = 'iFcaDbVj9mR3yr0VNe20XCmvjVUSw4TuGrvBeJQbCev63pfcTvXzrcHBceelgB4v3AlKACKF';
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36';
  return axios.get(`https://api.useragent.app/parse?key=${key}&ua=${userAgent}`);
}

// export const getAllData = () => {
//   const key = 'iFcaDbVj9mR3yr0VNe20XCmvjVUSw4TuGrvBeJQbCev63pfcTvXzrcHBceelgB4v3AlKACKF';
//   const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36';
  
//   return {
//     ip: axios.get('https://api.ipify.org?format=json&callback=getIP'),
//     agentData: axios.get(`https://api.useragent.app/parse?key=${key}&ua=${userAgent}`),
//   }
// }
