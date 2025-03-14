import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react'
import { CartReducer, ICartAction } from '../reducers/CartReducer';
import { CartItem } from '../models/CartItem';


export interface ICartContext {
  cart: CartItem[];
  dispatch: Dispatch<ICartAction>
}

const CartContext = createContext<ICartContext>({cart: [], dispatch: () => null})


export const CartProvider = ({children}: PropsWithChildren) => {
  const [cart, dispatch] = useReducer(CartReducer, []);

  return (
    <CartContext.Provider value={{cart, dispatch}}>
      {/* // RouterProvider comes in here though children */}
      {children} 
    </CartContext.Provider>
  )
}

export default CartContext
