import { Link } from 'react-router'
import { formatDate } from '../utils/dateUtils'
import { usePun } from '../hooks/usePun'

export const ManagePuns = () => {
  const {puns, isLoading, error, deletePunHandler} = usePun();
 
  return (
    <div>
      <h2>Manage Puns</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

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
