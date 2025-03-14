import { useState } from 'react'
import './App.css'
import { Product } from './models/Product'

function App() {
  const [products] = useState([
    new Product(1, 'Jacket', 100),
    new Product(2, 'Shoes', 50),
    new Product(3, 'Pants', 70),
  ])

  return (
    <>
      <div className="container">

        {/* Products */}
        <div className="products flex flex-wrap">
          {products.map((product) => (
            <div key={product.id} className="product mx-3 border-2 rounded p-3">
              <h3>{product.name}</h3>
              <p>{product.price} kr</p>
              <button>Add to cart</button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="cart mt-20">
          <h2 className='text-3xl'>Cart</h2>
          <ul className='border-t-2 border-b-2 my-5'>
            <li>
              <div className='flex justify-between items-center p-2'>
                <h3>Jacket</h3>
                <div>
                  <button>+</button>
                  <button>-</button>
                </div>
                <p>1 X 100 kr</p>
                <button className='bg-red-700 text-white'>Remove</button>
              </div>
            </li>
          </ul>
          <h3>Total: 100 kr</h3>
          <button>Checkout</button>
        </div>
      </div>
    </>
  )
}

export default App
