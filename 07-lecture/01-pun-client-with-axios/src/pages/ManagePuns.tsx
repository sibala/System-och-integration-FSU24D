import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import {API_URL} from '../services/baseService'
import { formatDate } from '../utils/dateUtils'
import { IPun } from '../types/Pun'
import axios from 'axios'

export const ManagePuns = () => {
  const [puns, setPuns] = useState<IPun[]>([])

  const fetchPuns = async () => {
    try {
      /**
       *  Axios
       */ 
      const response = await axios.get<IPun[]>(`${API_URL}/puns`);
      setPuns(response.data);

      /**
       *  Fetch
       */
      // const response = await fetch(`${API_URL}/puns`);
      // const data = await response.json();
      // setPuns(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPuns();
  }, [])


  const handleDelete = async (id: string) => {
    try {
      /**
       *  Axios
       */ 
      await axios.delete(`${API_URL}/puns/${id}`);

      /**
       *  Fetch
       */ 
      // await fetch(`${API_URL}/puns/${id}`, {
      //     method: 'DELETE', // *GET, POST, PATCH, DELETE, etc.
      // });

      const newPuns = puns.filter(pun => pun._id !== id);
      setPuns(newPuns);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
      <h2>Manage Puns</h2>

      <section id="pun-list">
        {
          puns.map((pun) => (
            <article className="list-group-item" key={pun._id}>
              <section>
                <p>{pun.content} </p>
                <p className='date'> - {formatDate(pun.date)}</p>
              </section>
              

              <section>
                <Link to={`/update-pun/${pun['_id']}`}>Update</Link> | <a onClick={() => {handleDelete(pun._id)}}>Delete</a>
              </section>
            </article>
          ))
        }
      </section>
    </div>
  )
}
