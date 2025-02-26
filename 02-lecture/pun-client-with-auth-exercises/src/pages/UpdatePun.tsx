import { FormEvent, useEffect, useState } from "react"
import { IPun, PunUpdate } from "../types/Pun"
import { Link, useNavigate, useParams } from "react-router"
import axios from "axios"
import { formatDate } from "../utils/dateUtils"
import { API_URL } from "../services/baseService"

export const UpdatePun = () => {
  // Exercise 1: Create a state variable to store the pun
  const [pun, setPun] = useState<IPun | null>(null)
  const params = useParams()
  const navigate = useNavigate()

  // Exercise 2: Create a useEffect hook to fetch the pun from the API, using the id from the URL
  useEffect(() => {
    if (!params.id) return;

    const fetchPun = async () => {
      try {
        const response = await axios.get<IPun>(`${API_URL}/${params.id}`)
        console.log(response.data);
        setPun(response.data);
      } catch (error) {
        console.log(error)
      } 
    }

    fetchPun()
  }, [])

  // Exercise 4: Handle changes in the form
  const handleChange = (e: FormEvent<HTMLTextAreaElement>) => {
    if (!pun) return;

    setPun({ ...pun, content: e.currentTarget.value})
  }
  // Exercise 5: Create a function to update the pun, and call it when the form is submitted
  // Exercise 6: Redirect to the ManagePuns page after updating the pun
  const updatePun = async (e: FormEvent) => {
    if (!pun) return;

    e.preventDefault()
    try {
      const payload: PunUpdate = {content: pun.content}
      await axios.patch('https://pun-api.vercel.app/puns/' + pun._id, payload)
      navigate('/')
    } catch (error) {
      console.log(error)
    } 
  }
  
  // Exercise 3: Display the pun contents in the form
  // Exercise 7: Add a back link to the ManagePuns page
  return (
    <div>
      <h2>Update Pun</h2>

      <form onSubmit={updatePun}>
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
