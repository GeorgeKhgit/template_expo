import axios, {AxiosError} from "axios";

import {BASE_URL} from "../helpers/consts";

import {showMessage} from "react-native-flash-message";

import {MainTest} from "./main/MainTest";

axios.interceptors.request.use(
  (config) => {
    console.log("Request", {
      url: config.url,
      ...config.headers,
      data: config.data,
    });

    return {
      ...config,
      baseURL: BASE_URL,
      headers: {
        ...config.headers,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Access-Control-Allow-Headers":
          "x-access-token, Origin, X-Requested-With, Content-Type, Accept",
      },
    };
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    showMessage({
      message: response?.data?.message || JSON.stringify(response),
      icon: "success",
      type: "success",
    });
    return response;
  },
  (error: AxiosError) => {
    //TODO
    switch (error.response?.status) {
      case 401: {
        if (axios.defaults.headers.Authorization) {
          console.log("Bad Token");
        }
        showMessage({
          message: error?.response?.data?.message || JSON.stringify(error),
          icon: "warning",
          type: "warning",
        });
        throw error;
      }

      case 403: {
        showMessage({
          message: error?.response?.data?.message || JSON.stringify(error),
          icon: "warning",
          type: "warning",
        });
        throw error;
      }

      case 400: {
        showMessage({
          message: error?.response?.data?.message || JSON.stringify(error),
          icon: "warning",
          type: "warning",
        });
        throw error;
      }

      default: {
        showMessage({
          message: error?.response?.data?.message || JSON.stringify(error),
          icon: "warning",
          type: "warning",
        });
        throw error;
      }
    }
  }
);

class Api {
  userApi = new MainTest();

  axiosToken = (token: string) => {
    console.log("token", token);
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  };
}

export default new Api();
