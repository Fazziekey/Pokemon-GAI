import axios from "axios";


const BASE_URL = "http://0.0.0.0:8000";


export const getDataParam = async (url: string, payload?: any) => {
  const data = axios
    .get(`${BASE_URL}${url}`, {
      ...(payload && { params: payload }),
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


export const getDataJSON = async (url: string, payload?: any) => {
  const data = axios
    .get(`${BASE_URL}${url}`, payload)
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


export const postDataParam = async (url: string, payload?: any) => {
    const data = axios
      .post(`${BASE_URL}${url}`, null, {
        params: payload,
      })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        if (!error?.response) {
          throw new Error(
            "The server is down at the moment, please try again later"
          );
        }
      });
    return data;
};


export const postDataJSON = async (url: string, payload?: any) => {
  const data = axios
      .post(`${BASE_URL}${url}`, payload)
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