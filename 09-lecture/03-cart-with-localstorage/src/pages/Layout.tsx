import { NavLink, Outlet } from 'react-router'

export const Layout = () => {
  return (
    <div>
      <header>
      <nav>
          <ul className="flex gap-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/checkout">Checkout</NavLink>
            </li>
          </ul>

          
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
