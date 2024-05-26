import axios from 'axios';

const coreApi = axios.create({
  baseURL: 'http://localhost:8000/api/'
});

export default coreApi;