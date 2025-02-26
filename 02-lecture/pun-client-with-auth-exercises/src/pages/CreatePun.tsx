import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router"
import { createPun } from "../services/punService"

export const CreatePun = () => {
  const [content, setContent] = useState<string>("")
  const navigate = useNavigate()

  const createPunHandler = async (e: FormEvent) => {
    e.preventDefault()
    await createPun({content: content});
    navigate('/')
  }

  return (
    <div>
      <h2>Create Pun</h2>

      <form onSubmit={createPunHandler}>
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
