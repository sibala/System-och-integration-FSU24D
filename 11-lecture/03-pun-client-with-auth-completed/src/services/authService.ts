import axios from "axios";
import { API_URL } from "./baseService";
import { User } from "../types/User";

export type tokenResponseType = {
  user: User,
  expires_in: number,
  token: string
}


export const signInToken = async (): Promise<tokenResponseType> =>  {
  try {
    axios.defaults.withCredentials = true; // Allowed to use cookies
    const response = await axios.post(API_URL + "/auth/login", {
      username: "Admin",
      password: "123"
    });   

    return response.data
  }
  catch (error: unknown) {
    console.log(error);
    throw error;
  }
}


export const refreshToken = async (): Promise<tokenResponseType> => {
  try {
    axios.defaults.withCredentials = true; // Allowed to use cookies
    const response = await axios.post(API_URL + "/auth/refresh-token");

    return response.data
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
}

export const clearTokens = async () => {
  try {
    axios.defaults.withCredentials = true;
    await axios.post(API_URL + "/auth/clear-token");   
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
}

