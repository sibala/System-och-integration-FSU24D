import { FormEvent, useState } from "react"
import { Link } from "react-router"
import { usePuns } from "../hooks/usePuns";

export const CreatePun = () => {
  const {loading, error, createPunHandler} = usePuns();
  const [content, setContent] = useState<string>("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await createPunHandler({content: content})
  }

  return (
    <div>
      <h2>Create Pun</h2>
      { error && <p>{error}</p> }
      
      <form onSubmit={handleSubmit}>
        <textarea 
          name="" 
          id="" 
          cols={30} 
          rows={10} 
          value={content} 
          onChange={(e) => setContent(e.currentTarget.value)}
        />

        <button>{ loading ? "Loading..." : "Create"}</button>

        <Link to={"/"}>&#x2190; back</Link>
      </form>
    </div>
  )
}
