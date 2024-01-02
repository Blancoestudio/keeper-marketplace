import axios from 'axios';
import { StorageService } from './StorageService';

const api = axios.create({
  baseURL: 'https://keeper-api-dev-hx79d.ondigitalocean.app/v1/market',
  // baseURL: 'http://localhost:3300/v1/market'
});

api.interceptors.request.use(
  async config => {
    const user = StorageService.get('user');
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user?.token}`;
    }
    return config;
  },
  error => {
    // Aquí puedes manejar cualquier error que ocurra durante la solicitud.
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    // Aquí puedes hacer algo con los datos de respuesta antes de que sean manejados por el código que hizo la solicitud.
    return response;
  },
  error => {
    // Aquí puedes manejar cualquier error que ocurra en la respuesta.
    return Promise.reject(error);
  },
);

export default api;
