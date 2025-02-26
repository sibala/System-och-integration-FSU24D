import { useEffect, useState } from "react"
import { IPun } from "../types/Pun"
import axios from "axios"
import { formatDate } from "../utils/dateUtils"
import { Link } from "react-router"

export const ManagePuns = () => {
  // Exercise 1: Create a state variable to store the puns
  const [puns, setPuns] = useState<IPun[]>([])
  
  // Exercise 2: Create a useEffect hook to fetch the puns from the API
  useEffect(() => {
    const fetchAllPuns = async () => {
      try {
        // Axios
        const response = await axios.get<IPun[]>('https://pun-api.vercel.app/puns')
        console.log(response.data);
        setPuns(response.data);
      } catch (error) {
        console.log(error)
      } 
    }

    fetchAllPuns()
  }, [])
 
  // Exercise 4: Create a function to delete a pun, and call it when the delete link is clicked
  const deletePun = async (id: string) => {
    try {
      await axios.delete('https://pun-api.vercel.app/puns/' + id)
      setPuns(puns.filter((pun) => pun._id !== id))
    } catch (error) {
      console.log(error)
    } 
  }
  
  return (
    <div>
      <h2>Manage Puns</h2>

      <section id="pun-list">
        {
           // Exercise 3: Display the puns in the page
          puns.map((pun) => (
            <article className="list-group-item" key={pun._id}>
              <section>
                <p>{pun.content}</p>
                <p className='date'> - {formatDate(pun.date)}</p>
              </section>
              
              {/* Exercise 5: Add a link to the UpdatePun page, passing the pun id as a parameter */}
              <section>
                <Link to={`/update-pun/${pun._id}`}>Update</Link> | <a href="#" onClick={() => deletePun(pun._id)}>Delete</a>
              </section>
            </article>
          ))
        }
      </section>
    </div>
  )
}
