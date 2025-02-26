import { useEffect, useState } from "react"
import { IPun } from "../types/Pun"
import axios from "axios"
import { formatDate } from "../utils/dateUtils"
import { Link } from "react-router"
import { API_URL } from "../services/baseService"
import { IUserCredentials } from "../types/IUserCredentials"
import { ITokenResponse } from "../types/ITokenResponse"



export const ManagePuns = () => {
  // Exercise 1: Create a state variable to store the puns
  const [puns, setPuns] = useState<IPun[]>([])
  const [token, setToken] = useState<string>("")

  const getToken = async () => {
    try {
      
      const payload : IUserCredentials = {
        username: "Sibar",
        password: "123"
      }

      const response = await axios.post<ITokenResponse>('https://pun-api-with-auth.vercel.app/auth/token', payload)
      // console.log(response.data)
      setToken(response.data.accessToken)
    } catch (error) {
      console.log(error)
    } 
  }
  
  // Exercise 2: Create a useEffect hook to fetch the puns from the API
  useEffect(() => {
    getToken()
    const fetchAllPuns = async () => {
      try {

        // Axios
        // const options = {
        //   timeout: 10, millisecons
        //   headers: {
        //     Authorization: "Bearer " + token
        //   }
        // } 
        // const response = await axios.get<IPun[]>(API_URL, options)
        // console.log(response.data);
        // setPuns(response.data);


        // Fetch
        console.log(token);
        const options = {
          method: "GET",
          headers: {
            'Authorization': "Bearer " + token,
          }
        } 
        const response = await fetch(API_URL, options)
        const data: IPun[] = await response.json();
        // console.log(data, token);
        setPuns(data);
      } catch (error) {
        console.log(error)
      } 
    }

    fetchAllPuns()
  }, [token])
 
  // Exercise 4: Create a function to delete a pun, and call it when the delete link is clicked
  const deletePun = async (id: string) => {
    try {
      const headers = {}
      await axios.delete(`${API_URL}/${id}`, headers)
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
