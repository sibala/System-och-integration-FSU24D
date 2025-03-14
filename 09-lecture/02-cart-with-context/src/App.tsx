import { RouterProvider } from "react-router";
import { router } from "./Router";
import './App.css'
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </>
  )

  // May implement the provider ths wa also
  // const [cart, dispatch] = useReducer(CartReducer, []);
  // return (
  //   <>
  //     <CartContext.Provider value={{cart, dispatch}}>
  //       <RouterProvider router={router}></RouterProvider>
  //     </CartContext.Provider>
  //   </>
  // )
}

export default App
