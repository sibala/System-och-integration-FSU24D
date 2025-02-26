import { FormEvent, useEffect, useState } from "react"
import { IPun } from "../types/Pun"
import { Link, useNavigate, useParams } from "react-router"
import { formatDate } from "../utils/dateUtils"
import { fetchPun, updatePun } from "../services/punService"

export const UpdatePun = () => {
  const [pun, setPun] = useState<IPun | null>(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!params.id) return;
    fetchPun(params.id).then((data) => setPun(data))
  }, [])

  const handleChange = (e: FormEvent<HTMLTextAreaElement>) => {
    if (!pun) return;

    setPun({ ...pun, content: e.currentTarget.value})
  }

  const updatePunHandler = async (e: FormEvent) => {
    if (!pun) return;

    e.preventDefault()
    try {
      updatePun(pun._id, {content: pun.content})
      navigate('/')
    } catch (error) {
      console.log(error)
    } 
  }

  return (
    <div>
      <h2>Update Pun</h2>

      <form onSubmit={updatePunHandler}>
        <textarea 
          name="" 
          id="" 
          cols={30} 
          rows={10} 
          value={pun?.content ?? ''} 
          onChange={handleChange}
        />

        <p>Created at: {pun ? formatDate(pun.date) : 'Loading...'}</p>

        <button>Update</button>

        <Link to={"/"}>&#x2190; back</Link>
      </form>
    </div>
  )
}
