import { client } from '../httpClient';

export const getInfo = (zip) => {
  return client.get(`/forecast?location=${zip}&timesteps=1d&units=metric&apikey=TUzTweSdassA6U6IR6Yb54i4pxXVtFmf`)
};
