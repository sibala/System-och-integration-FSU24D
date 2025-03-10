import { Link } from 'react-router'
import { formatDate } from '../utils/dateUtils'
import { usePun } from '../hooks/usePun'
import { useEffect } from 'react';

export const ManagePuns = () => {
  const {puns, isLoading, error, fetchPunsHandler, deletePunHandler} = usePun();
  
  useEffect(() => {
    fetchPunsHandler();
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

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
                <Link to={`/update-pun/${pun['_id']}`}>Update</Link> | <a onClick={() => {deletePunHandler(pun._id)}}>Delete</a>
              </section>
            </article>
          ))
        }
      </section>
    </div>
  )
}
