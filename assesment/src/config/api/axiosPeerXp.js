import axios from "axios";
import { BASE_URL } from "./apiEndpoints";

const axiosPeerXP = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

axiosPeerXP.interceptors.request.use(
  (request) => {
    //We can do something before request is sent
    return request;
  },
  (error) => {
    //We can do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosPeerXP.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
