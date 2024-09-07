import axios from "axios";
import { toast } from "react-toastify";
const api_error_code = {
  unauthorized: 401,
  accessDenied: 430,
  sessionExpired: 423,
  validationError: 400,
  emailNotVerified: 403,
};

const $axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_FRONTEND,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

$axios.interceptors.request.use(
  (config) => {
  const token = localStorage.getItem('accessToken');
  const myToken = JSON.parse(token);
  console.log("config12",config);
  if (myToken) {
    config.headers['Authorization'] = `Bearer ${myToken}`;
  }
  return config;
}, 
(error) => {
  return Promise.reject(error);
});


$axios.interceptors.response.use(
  response => {
  return response;
}, 
error => {
  const { response } = error;
  if (response && response.status == api_error_code.unauthorized) {
    localStorage.clear();
    toast.warn("Session Expired. Please login again.", { autoClose: 3000 });
    window.location.href = '/';
  }
  return Promise.reject(error);
});

const $axiosLogin = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_FRONTEND,


  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

const $axios1 = axios.create({
  responseType: "blob",
  baseURL: ``,  // Specify if needed
  timeout: 30000,
  headers: {
    deviceType: "3",
    offset: "5:30",
    api_key: `1234`,
    "Access-Control-Allow-Origin": "*",
  },
});

const constants = {
  api_error_code,
  axios: $axios,
  axios1: $axios1,
  axiosLogin: $axiosLogin,
  apiUrl: ``,
};

export default constants;