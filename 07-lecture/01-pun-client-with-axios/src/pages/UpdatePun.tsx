/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import axios from 'axios';
import { API_URL } from '../services/baseService';
import { formatDate } from '../utils/dateUtils';
import { IPun, PunUpdate } from '../types/Pun';

export const UpdatePun = () => {
  const [pun, setPun] = useState<IPun | null>(null); 
  const navigate = useNavigate();
  const params = useParams();

  const fetchPun = async () => {
    try {
      /**
       *  Axios
       */ 
      const response = await axios.get<IPun>(`${API_URL}/puns/${params.id}`);
      setPun(response.data);

      /**
       *  Fetch
       */
      // const response = await fetch(`${API_URL}/puns/${params.id}`);
      // const data = await response.json();
      // setPun(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPun();
  }, [])

  const handeChange = (e: FormEvent<HTMLTextAreaElement>) => {
    if (!pun) return;

    setPun({...pun, content: e.currentTarget.value});
  }


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!pun) return;

    const payload: PunUpdate = {content: pun.content}
    try {
      /**
       *  Axios
       */ 
      await axios.patch(`${API_URL}/puns/${params.id}`, payload);

      /**
       *  Fetch
       */ 
      // await fetch(`${API_URL}/puns/${params.id}`, {
      //     method: 'PATCH', // *GET, POST, PATCH, DELETE, etc.
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
      <h2>Update Pun</h2>

      <form onSubmit={handleSubmit}>
        <textarea 
          name="" 
          id="" 
          cols={30} 
          rows={10} 
          value={pun?.content ?? ''} 
          onChange={handeChange}
        />

        <p>Created at: {pun ? formatDate(pun.date) : "Loading..."}</p>

        <button>Update</button>

        <Link to="/" className='back-link'>&#x2190; back</Link>
      </form>
    </div>
  )
}
