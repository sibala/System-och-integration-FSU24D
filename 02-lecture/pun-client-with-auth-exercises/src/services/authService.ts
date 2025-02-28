import axios from "axios"
import { IUserCredentials } from "../types/IUserCredentials"
import { ITokenResponse } from "../types/ITokenResponse"
import { API_URL } from "./baseService"

export const getToken = async () => {
  try {
    const payload : IUserCredentials = {
      username: "Sibar",
      password: "123"
    }
    
    const response = await axios.post<ITokenResponse>(`${API_URL}/auth/token`, payload)
    return response.data.accessToken;
  } catch (error) {
    console.log(error)
  } 
}
  