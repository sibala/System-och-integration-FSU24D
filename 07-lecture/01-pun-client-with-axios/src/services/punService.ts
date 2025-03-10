import axios from "axios";
import { IPun } from "../types/Pun";
import { API_URL } from "./baseService";

export const fetchPuns = async (): Promise<IPun[]> => {
  try {
    const response = await axios.get<IPun[]>(`${API_URL}/puns`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export const deletePun = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/uns/${id}`);
  } catch (error) {
    console.log(error);
    // throw error;
  }
}