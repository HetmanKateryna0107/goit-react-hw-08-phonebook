import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const privatApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
  set(value) {
    privatApi.defaults.headers.Authorization = value;
  },
  unset() {
    privatApi.defaults.headers.Authorization = null;
  },
};
