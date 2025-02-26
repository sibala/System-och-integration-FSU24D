import axios, { AxiosResponse } from "axios";
import { getToken } from "./authService";
export const API_URL = "https://pun-api-with-auth.vercel.app";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: "Bearer " + await getToken()
  }
});

export const handleRequest = async<T>(request: Promise<AxiosResponse<T>>) => {
  try {
    const response: {data: T} = await request
    return response.data;
  } catch (error) {
    console.log(error)
    throw error
  } 
}