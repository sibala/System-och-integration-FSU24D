import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { createPun } from '../services/punService';

export const CreatePun = () => {
  const [content, setContent] = useState<string>(""); 
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await createPun({content: content});
    navigate('/');
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
