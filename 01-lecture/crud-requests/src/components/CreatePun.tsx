import { IPunCreate } from "../types/Pun"

export const CreatePun = () => {

  const createPun = async () => {
    try {

      const payload: IPunCreate = {
        "content":"A man sued an airline company after it lost his luggage. Sadly, he lost his case."
      }

      const options = {
        method: "POST", //GET, POST, PATCH, PUT, DELETE,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
      const response = await fetch('https://pun-api.vercel.app/puns', options)
      if (!response.ok) { throw new Error('Couldnt create pun')}
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h2>Create Pun</h2>
      <button onClick={createPun}>Create pun</button>
    </div>
  )
}
