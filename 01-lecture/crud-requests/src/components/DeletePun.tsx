export const DeletePun = () => {
  const deletePun = async () => {
    try {
      const options = {
        method: "DELETE",
      }
      const punId = "67bc2e6ea62ab90003f6680a"
      const response = await fetch("https://pun-api.vercel.app/puns/" + punId, options)
      if (!response.ok) { throw new Error('Couldnt fetch pun')}
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
