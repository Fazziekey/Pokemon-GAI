import axios from "axios";


const BASE_URL = "http://0.0.0.0:8000";


export const getData = async (url: string, params?: any) => {
  const data = axios
    .get(`${BASE_URL}${url}`, {
      ...(params && { params: params }),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (!error?.response) {
        throw new Error(
          "The server is down at the moment, please try again later",
        );
      }
    });
  return data;
};


export const postData = async (url: string, payload?: any, params?: any) => {
  const data = axios
      .post(`${BASE_URL}${url}`, payload, {
        params: params,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (!error?.response) {
          throw new Error(
            "The server is down at the moment, please try again later",
          );
        }
      });
    return data;
};