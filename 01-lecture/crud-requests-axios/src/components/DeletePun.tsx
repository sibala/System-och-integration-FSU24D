import axios from "axios"

export const DeletePun = () => {
  const deletePun = async () => {
    try {
      const punId = "67bc64d260beae00030ed109"
      // Fetch
      // const options = {
      //   method: "DELETE",
      // }
      // const response = await fetch("https://pun-api.vercel.app/puns/" + punId, options)
      // if (!response.ok) { throw new Error('Couldnt fetch pun')}

      // Axios
      await axios.delete('https://pun-api.vercel.app/puns/' + punId)
    } catch (error) {
      console.log(error)
    } 
  }

  return (
    <div>
      <h2>DeletePun</h2>
      <button onClick={deletePun}>Delete Pun</button>  
    </div>
  )
}
