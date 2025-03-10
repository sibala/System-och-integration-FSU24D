import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { API_URL } from '../services/baseService';
import axios from 'axios';
import { PunCreate } from '../types/Pun';

export const CreatePun = () => {
  const [content, setContent] = useState<string>(""); 
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const payload: PunCreate = {content: content}
    try {
      /**
       *  Axios
       */ 
      await axios.post(`${API_URL}/puns`, payload);

      /**
       *  Fetch
       */ 
      // await fetch(`${API_URL}/puns`, {
      //     method: 'POST', // *GET, POST, PATCH, DELETE, etc.
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(payload) // body data type must match "Content-Type" header
      // });

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Create Pun</h2>

      <form onSubmit={handleSubmit}>
        <textarea 
          name="" 
          id="" 
          cols={30} 
          rows={10} 
          value={content} 
          onChange={(e: FormEvent<HTMLTextAreaElement>) => setContent(e.currentTarget.value)}
        />

        <button>Create</button>

        <Link to="/" className='back-link'>&#x2190; back</Link>
      </form>
    </div>
  )
}
