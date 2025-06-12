import axios from 'axios';

const jsonPlaceholderAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

const dummyJsonAPI = axios.create({
  baseURL: 'https://dummyjson.com/',
});

const reqresAPI = axios.create({
  baseURL: 'https://reqres.in/api/',
});

export {jsonPlaceholderAPI, dummyJsonAPI, reqresAPI};
