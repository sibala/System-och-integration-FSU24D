import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { formatDate } from '../utils/dateUtils'
import { IPun } from '../types/Pun'
import { deletePun, fetchPuns } from '../services/punService'

export const ManagePuns = () => {
  const [puns, setPuns] = useState<IPun[]>([])

  useEffect(() => {
    fetchPuns().then((data) => setPuns(data));
  }, [])

  const handleDelete = async (id: string) => {
    await deletePun(id);
    const newPuns = puns.filter(pun => pun._id !== id);
    setPuns(newPuns);
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
