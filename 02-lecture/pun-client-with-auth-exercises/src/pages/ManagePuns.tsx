import { useEffect, useState } from "react"
import { IPun } from "../types/Pun"
import { formatDate } from "../utils/dateUtils"
import { Link } from "react-router"

import { deletePun, fetchAllPuns } from "../services/punService"

export const ManagePuns = () => {
  const [puns, setPuns] = useState<IPun[]>([])

  useEffect(() => {
    fetchAllPuns().then((data) => setPuns(data))
  }, [])
 
  const deletePunHandler = async (id: string) => {
    await deletePun(id)
    setPuns(puns.filter((pun) => pun._id !== id))
  }
  
  return (
    <div>
      <h2>Manage Puns</h2>

      <section id="pun-list">
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
