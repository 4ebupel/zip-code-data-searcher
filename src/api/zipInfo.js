import axios from "axios";

export const getInfo = (zip) => {

  const options = {
    method: 'GET',
    url: `https://api.tomorrow.io/v4/weather/forecast?location=${zip}&timesteps=1d&units=metric&apikey=TUzTweSdassA6U6IR6Yb54i4pxXVtFmf`,
    headers: {accept: 'application/json'}
  };
  
  return axios
    .request(options)
    .catch(function (error) {
      console.error(error);
    });
};
