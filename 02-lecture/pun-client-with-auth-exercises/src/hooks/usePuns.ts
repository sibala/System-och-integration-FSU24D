import { useState } from "react"
import { IPun } from "../types/Pun"

export const usePuns = () => {
  // Exercise 1: Refactor logic from the /pages/.... to this custom Hook
  // Exercise 2: Implement loading and error on he pages, for better UX
  // Exercise 3: May also cache all the pundata in this custom hook, with localStorage
  const [puns, setPuns] = useState<IPun[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const createPunHandler = () => {}
  const updatePunHandler = () => {}
  const deletePunHandler = () => {}

  return {puns, loading, error, createPunHandler, updatePunHandler, deletePunHandler}
}