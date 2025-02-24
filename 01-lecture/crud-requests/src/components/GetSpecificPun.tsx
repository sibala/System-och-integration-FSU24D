import { useEffect, useState } from "react"
import { IPun } from "../types/Pun"

export const GetSpecificPun = () => {
  const [pun, setPun] = useState<IPun | null>(null)

  const fetchPun = async () => {
    try {
      const punId = "67bc2e6ea62ab90003f6680a"
      const response = await fetch("https://pun-api.vercel.app/puns/" + punId)
      if (!response.ok) { throw new Error('Couldnt fetch pun')}
      const data = await response.json();
      setPun(data);
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
