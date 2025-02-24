import axios from "axios"
import { IPunUpdate } from "../types/Pun"

export const UpdatePun = () => {
  const updatePun = async () => {
    try {
      const payload: IPunUpdate = {
        content: "A man sued an airline company after it lost his luggage. Sadly, he lost his case - updated",
      }
      const punId = "67bc64d260beae00030ed109"

      // Fetch
      // const options = {
      //   method: "PATCH",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(payload)
      // }

      // const response = await fetch('https://pun-api.vercel.app/puns/' + punId, options)
      // if (!response.ok) { throw new Error('Couldnt update pun')}

      // Axios
      await axios.patch('https://pun-api.vercel.app/puns/' + punId, payload)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h2>Update Pun</h2>
      
      <button onClick={updatePun}>Update Pun</button>
    </div>
  )
}
