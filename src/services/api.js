import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-aderson.herokuapp.com',
});

export default api;