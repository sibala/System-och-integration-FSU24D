import { useContext} from 'react'
import CartContext from '../contexts/CartContext';


export const Checkout = () => {
  const {cart, dispatch} = useContext(CartContext);
  // const [cart, dispatch] = useReducer(CartReducer, []);
  return (
    <div>
      <h2 className='text-3xl my-4'>Checkout</h2>

      {JSON.stringify(cart)}
    </div>
  )
}
