import axios from "axios";
import { IPun, PunCreate, PunUpdate } from "../types/Pun";
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

export const fetchPun = async (id: string): Promise<IPun> => {
  try {
    const response = await axios.get<IPun>(`${API_URL}/puns/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const createPun = async (payload: PunCreate): Promise<IPun> => {
  try {
    const response = await axios.post(`${API_URL}/puns`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const updatePun = async (id: string, payload: PunUpdate): Promise<IPun> => {
  try {
    const response = await axios.patch(`${API_URL}/puns/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const deletePun = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/puns/${id}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
}