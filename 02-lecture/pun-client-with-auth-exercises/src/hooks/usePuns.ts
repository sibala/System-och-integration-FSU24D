/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react"
import { IPun, PunCreate } from "../types/Pun"
import { createPun, deletePun, fetchAllPuns } from "../services/punService"
import { useNavigate } from "react-router"

export const usePuns = () => {
  // Exercise 1: Refactor logic from the /pages/.... to this custom Hook
  // Exercise 2: Implement loading and error on he pages, for better UX
  // Exercise 3: May also cache all the pundata in this custom hook, with localStorage
  const [puns, setPuns] = useState<IPun[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const navigate = useNavigate()

  useEffect(() => {
    console.log('usePuns -> useEffect')
    setLoading(true)
    
    fetchAllPuns()
      .then((data) => setPuns(data))
      .finally(() => setLoading(false))
  }, [])

  const createPunHandler = async (payload: PunCreate) => {
    console.log('usePuns -> createPunHandler')
    setLoading(true)
    try {
      await createPun(payload);
      navigate('/');
    } catch (error: unknown) {
      setError("An error occured when creating the pun. Please try again later")
    } finally {
      setLoading(false)
    }
  }

  const updatePunHandler = () => {}

  const deletePunHandler = async (id: string) => {
    console.log('usePuns -> deletePunHandler')
    setLoading(true)
    try {
      await deletePun(id)
      setPuns(puns.filter((pun) => pun._id !== id))
    } catch (error: unknown) {
      setError("An error occured when deleting the pun. Please try again later")
    } finally {
      setLoading(false)
    }
  }

  return {puns, loading, error, createPunHandler, updatePunHandler, deletePunHandler}
}