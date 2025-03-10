import axios from "axios";
import { IPun, PunCreate, PunUpdate } from "../types/Pun";
import { API_URL, handleRequest } from "./baseService";

export const fetchPuns = async (): Promise<IPun[]> => {
  return await handleRequest<IPun[]>(axios.get(`${API_URL}/puns`))
}

export const fetchPun = async (id: string): Promise<IPun> => {
  return await handleRequest<IPun>( axios.get(`${API_URL}/puns/${id}`))
}

export const createPun = async (payload: PunCreate): Promise<IPun> => {
  return await handleRequest<IPun>(axios.post(`${API_URL}/puns`, payload))
}

export const updatePun = async (id: string, payload: PunUpdate): Promise<IPun> => {
  return await handleRequest<IPun>(axios.patch(`${API_URL}/puns/${id}`, payload))
}

export const deletePun = async (id: string): Promise<void> => {
  return await handleRequest<void>(axios.delete(`${API_URL}/puns/${id}`))
}