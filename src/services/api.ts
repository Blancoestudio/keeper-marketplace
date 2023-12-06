import axios from 'axios';

const api = axios.create({
  baseURL: '',
});

api.interceptors.request.use(
  async config => {
    // Aquí puedes hacer algo antes de que la solicitud sea enviada.
    // Por ejemplo, puedes agregar un token de autenticación al encabezado de la solicitud.
    // const token = await StorageService.get('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
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
