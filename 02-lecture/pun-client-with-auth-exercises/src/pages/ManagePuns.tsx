import { formatDate } from "../utils/dateUtils"
import { Link } from "react-router"
import { usePuns } from "../hooks/usePuns"

export const ManagePuns = () => {
  const {puns, loading, error, deletePunHandler} = usePuns();
  console.log('ManagePuns')
  
  return (
    <div>
      <h2>Manage Puns</h2>  
      { error && <p>{error}</p> }

      <section id="pun-list">
        { loading && <p>Loading...</p> }
        {
          puns.map((pun) => (
            <article className="list-group-item" key={pun._id}>
              <section>
                <p>{pun.content}</p>
                <p className='date'> - {formatDate(pun.date)}</p>
              </section>
              
              <section>
                <Link to={`/update-pun/${pun._id}`}>Update</Link> | <a onClick={() => deletePunHandler(pun._id)}>Delete</a>
              </section>
            </article>
          ))
        }
      </section>
    </div>
  )
}
