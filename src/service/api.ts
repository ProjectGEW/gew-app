import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:6868"
});

export default api;