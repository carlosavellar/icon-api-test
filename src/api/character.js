import axios from 'axios';

export const getCharacter = () => {
  return axios.get('/character', {
    withCredentials: false,
    params: {
      limit: 1000,
    },
  });
};
