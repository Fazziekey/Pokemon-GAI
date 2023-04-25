import axios from "axios";


const BASE_URL = "http://0.0.0.0:8000";


export const getData = async (url: string, params?: any) => {
  try {
    const response = await axios.get(`${BASE_URL}${url}`, {
      ...(params && { params: params }),
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    if (!error?.response) {
      throw new Error("The server is down at the moment, please try again later");
    }
    return { status: error.response.status, data: error.response.data };
  }
};


export const postData = async (url: string, payload?: any, params?: any, contentType?: string) => {
  try {
    const response = await axios.post(`${BASE_URL}${url}`, payload, {
      params: params,
      headers: {
        "Content-Type": contentType || "application/json",
      }
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    if (!error?.response) {
      throw new Error("The server is down at the moment, please try again later");
    }
    return { status: error.response.status, data: error.response.data };
  }
};