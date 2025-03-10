import { NavLink } from 'react-router'

export const Nav = () => {
  return (
    <nav id="main-nav">
      <ul>
        <li>
          <NavLink to={"/"} className={({ isActive }) => (isActive ? " active" : "")}>Puns</NavLink>
        </li>
        <li>
          <NavLink to={"/create-pun"} className={({ isActive }) => (isActive ? " active" : "")}>New Pun</NavLink>
        </li>
      </ul>
    </nav>
  )
}
