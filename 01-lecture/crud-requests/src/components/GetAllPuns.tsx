import { useEffect, useState } from "react"
import { IPun } from "../types/Pun"

export const GetAllPuns = () => {
  const [puns, setPuns] = useState<IPun[]>([])
  console.log()

  const fetchAllPuns = async () => {
    try {
      const response = await fetch('https://pun-api.vercel.app/puns')
      if (!response.ok) { throw new Error('Couldnt fetch all puns')}
      const data = await response.json();
      setPuns(data);
    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(() => {
    fetchAllPuns()
  }, [])

  return (
    <div>
      <h2>Get All Puns</h2>
      { JSON.stringify(puns)}
    </div>
  )
}
