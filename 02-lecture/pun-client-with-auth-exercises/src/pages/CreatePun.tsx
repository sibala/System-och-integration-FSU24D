import axios from "axios"
import { FormEvent, useEffect, useState } from "react"
import { PunCreate } from "../types/Pun"
import { Link, useNavigate } from "react-router"
import { API_URL } from "../services/baseService"
import { IUserCredentials } from "../types/IUserCredentials"
import { ITokenResponse } from "../types/ITokenResponse"

export const CreatePun = () => {
  // Exercise 1: Create a state variable to store the pun content
  const [content, setContent] = useState<string>("")
  const navigate = useNavigate()
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

  useEffect(() => {
    getToken()
  }, [])

  // Exercise 3: Create a function to create the pun, and call it when the form is submitted
  // Exercise 4: Redirect to the ManagePuns page after creating the pun
  const createPun = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const payload: PunCreate = {content: content}

      // Axios
      // const options = {
      //   timeout: 1000,
      //   headers: {
      //     Authorization: "Bearer " + token
      //   }
      // }
      // await axios.post(API_URL, payload, options)
      


      // Fetch
      const options = {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          'Content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      }

      await fetch(API_URL, options)
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
