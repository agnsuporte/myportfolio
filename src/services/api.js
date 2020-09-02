import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://api.agnsuporte.com",
  // baseURL: "http://localhost:3333",
  validateStatus: function (status) {
    return status >= 200 && status < 500; // default =--> status >= 200 && status < 300;
  },
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;