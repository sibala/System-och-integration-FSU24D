import { useEffect, useState } from "react"
import { IPun } from "../types/Pun"
import axios from "axios"

export const GetAllPuns = () => {
  const [puns, setPuns] = useState<IPun[]>([])
  console.log()

  const fetchAllPuns = async () => {
    try {
      // Fetch
      // const response = await fetch('https://pun-api.vercel.app/puns')
      // if (!response.ok) { throw new Error('Couldnt fetch all puns')}
      // const data = await response.json();

      // Axios
      const response = await axios.get('https://pun-api.vercel.app/puns')

      setPuns(response.data);
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
