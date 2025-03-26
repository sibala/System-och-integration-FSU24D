import { NavLink } from 'react-router'
import { useAuth } from '../hooks/useAuth'

export const Nav = () => {
  const {logout} = useAuth()
  return (
    <nav id="main-nav">
      <ul>
        <li>
          <NavLink to={"/"} className={({ isActive }) => (isActive ? " active" : "")}>Puns</NavLink>
        </li>
        <li>
          <NavLink to={"/create-pun"} className={({ isActive }) => (isActive ? " active" : "")}>New Pun</NavLink>
        </li>
        <li>
          <a onClick={logout} >Logout</a>
        </li>
      </ul>
    </nav>
  )
}
