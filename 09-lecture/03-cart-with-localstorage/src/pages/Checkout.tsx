import { useCart } from '../hooks/useCart';


export const Checkout = () => {
  const {cart, dispatch} = useCart();
  // const [cart, dispatch] = useReducer(CartReducer, []);
  return (
    <div>
      <h2 className='text-3xl my-4'>Checkout</h2>

      {JSON.stringify(cart)}
    </div>
  )
}
