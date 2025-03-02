import { IPun, PunCreate, PunUpdate } from "../types/Pun";
import { api, handleRequest } from "./baseService";
const PUN_ENDPOINT = '/puns'

export const fetchAllPuns = () => {
  return handleRequest<IPun[]>(api.get(PUN_ENDPOINT));
}
export const fetchPun = (id: string) => {
  return handleRequest<IPun>(api.get(`${PUN_ENDPOINT}/${id}`));
}
export const createPun = (payload: PunCreate) => {
  console.log("punsService -> createPun")
  return handleRequest<IPun>(api.post(PUN_ENDPOINT, payload));
}
export const updatePun = (id: string, payload: PunUpdate) => {
  return handleRequest<IPun>(api.patch(`${PUN_ENDPOINT}/${id}`, payload));
}
export const deletePun = (id: string) => {
  console.log("punsService -> deletePun")
  return handleRequest(api.delete(`${PUN_ENDPOINT}/${id}`));
}
