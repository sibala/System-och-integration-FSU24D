import { useEffect, useState } from "react"
import { IPun } from "../types/Pun"
import axios from "axios"

export const GetSpecificPun = () => {
  const [pun, setPun] = useState<IPun | null>(null)

  const fetchPun = async () => {
    try {
      const punId = "67bc64d260beae00030ed109"
      
      // Fetch
      // const response = await fetch("https://pun-api.vercel.app/puns/" + punId)
      // if (!response.ok) { throw new Error('Couldnt fetch pun')}
      // const data = await response.json();

      // Axios
      const response = await axios.get("https://pun-api.vercel.app/puns/" + punId)
      console.log(response)
      setPun(response.data);
    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(() => {
    fetchPun()
  }, [])

  return (
    <div>
      <h2>Get Specific Pun</h2>
      { JSON.stringify(pun)}
    </div>
  )
}
