import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'http://192.168.0.88:4000/'

export default client;