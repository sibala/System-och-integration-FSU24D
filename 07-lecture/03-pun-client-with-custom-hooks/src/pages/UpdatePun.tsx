/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { formatDate } from '../utils/dateUtils';
import { IPun} from '../types/Pun';
import { fetchPun, updatePun } from '../services/punService';

export const UpdatePun = () => {
  const [pun, setPun] = useState<IPun | null>(null); 
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!params.id) return;
    fetchPun(params.id).then((data) => setPun(data));  
  }, [])

  const handeChange = (e: FormEvent<HTMLTextAreaElement>) => {
    if (!pun) return;
    setPun({...pun, content: e.currentTarget.value});
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!pun) return;

    await updatePun(pun._id, {content: pun.content});
    navigate('/');
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
