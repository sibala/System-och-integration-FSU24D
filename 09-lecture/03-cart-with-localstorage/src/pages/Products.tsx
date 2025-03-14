import { useState } from 'react'
import { Product } from '../models/Product';
import { CartACtionType } from '../reducers/CartReducer';
import { CartItem } from '../models/CartItem';
import { useCart } from '../hooks/useCart';

export const Products = () => {
  const {cart, dispatch} = useCart();
  // const [cart, dispatch] = useReducer(CartReducer, []);
  const [products] = useState([
    new Product(1, 'Jacket', 100),
    new Product(2, 'Shoes', 50),
    new Product(3, 'Pants', 70),
  ])

  const totalCartPrice = cart.reduce( (total, item: CartItem) => (
    total + (item.quantity * item.product.price)
  ), 0) // Initial value


  const handleAddToCart = (product: Product, quantity: number) => {
    dispatch({
      type: CartACtionType.ADD_ITEM,
      payload: new CartItem(product, quantity)
    })
  }

  const handleChangeQuantity = (product: Product, quantity: number) => {
    dispatch({
      type: CartACtionType.CHANGE_QUANTITY,
      payload: new CartItem(product, quantity)
    })
  }

  const handleRemoveFromCart = (cartItem: CartItem) => {
    dispatch({
      type: CartACtionType.REMOVE_ITEM,
      payload: cartItem
    })
  }


  const handleResetCart = () => {
    dispatch({
      type: CartACtionType.RESET_CART,
      payload: null
    })
  }


  return (
    <>
      <div className="container">

        {/* Products */}
        <div className="products flex flex-wrap">
          {products.map((product) => (
            <div key={product.id} className="product mx-3 border-2 rounded p-3">
              <h3>{product.name}</h3>
              <p>{product.price} kr</p>
              <button onClick={() => handleAddToCart(product, 1)}>Add to cart</button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="cart mt-20">
          <h2 className='text-3xl'>Cart</h2>
          <ul className='border-t-2 border-b-2 my-5'>
            {
              cart.map((item) => (
                <li key={item.product.id}>
                  <div className='flex justify-between items-center p-2'>
                    <h3>{item.product.name}</h3>
                    <div>
                      <button onClick={() => handleChangeQuantity(item.product, 1)}>+</button>
                      <button onClick={() => handleChangeQuantity(item.product, -1)}>-</button>
                    </div>
                    <p>{item.quantity} X {item.product.price} kr</p>
                    <button onClick={() => handleRemoveFromCart(item)}className='bg-red-700 text-white'>Remove</button>
                  </div>
                </li>
              ))
            }
    
          </ul>
          <h3>Total: {totalCartPrice} kr</h3>
          <button onClick={handleResetCart}>Reset Cart</button>
          <button>Checkout</button>
        </div>
      </div>
    </>
  )
}
