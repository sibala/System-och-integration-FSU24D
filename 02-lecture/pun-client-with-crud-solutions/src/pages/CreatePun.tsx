import axios from "axios"
import { FormEvent, useState } from "react"
import { PunCreate } from "../types/Pun"
import { Link, useNavigate } from "react-router"

export const CreatePun = () => {
  // Exercise 1: Create a state variable to store the pun content
  const [content, setContent] = useState<string>("")
  const navigate = useNavigate()

  // Exercise 3: Create a function to create the pun, and call it when the form is submitted
  // Exercise 4: Redirect to the ManagePuns page after creating the pun
  const createPun = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const payload: PunCreate = {content: content}
      await axios.post('https://pun-api.vercel.app/puns', payload)
      navigate('/')
    } catch (error) {
      console.log(error)
    } 
  }
  
  // Exercise 2: Handle changes in the form
  // Exercise 5: Add a back link to the ManagePuns page 
  return (
    <div>
      <h2>Create Pun</h2>

      <form onSubmit={createPun}>
        <textarea 
          name="" 
          id="" 
          cols={30} 
          rows={10} 
          value={content} 
          onChange={(e) => setContent(e.currentTarget.value)}
        />

        <button>Create</button>

        <Link to={"/"}>&#x2190; back</Link>
      </form>
    </div>
  )
}
