import { FormEvent, useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // Kolla om varor finns i varukorg.
    // Om ja, visa checkouten ( varukorg, kundformulär, stripe integration)
    // Om nej, dölj checkouten med en förklaring
    
  })


  // // const handleCustomer = () => {
  //     Hämta kund via email
  //     Om kund finns
  //       returnera kund ID
  //     Annars  
  //       Skapa ny kund och returnera kund ID

  // // }


  // // const handleOrder = (customerID) => {
  //     Skapa nu ordern utifrån customerID, Cart, samt följande parametrar
          // payment_status=“Unpaid”
          // payment_id=“”
          // order_status=“Pending”


        // returnera orderID
  // // }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()


    // const customerID = handleCustomer()
    // const orderID = handleOrder(customerID)
    

    // const payload = {
    //   line_items: generera med hjälp av Cart
    //   order_id: orderID
    // }
    try {
      const response = await fetch('http://localhost:3000/stripe/create-checkout-session-hosted', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({payload}) // ????? lista ut själva
      });

      const data = await response.json();
      // console.log(data.checkout_url);

      // Uppdatera befintlig order utifrån orderID 
      //   payment_status=“Unpaid”
      //   payment_id=    // uppdatera denna med data.session_id
      //   order_status=“Pending”


      // Redirect to Stripe Hosted Checkout
      window.location.href = data.checkout_url
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <h1>Checkout (Hosted)</h1>
        
        <h3>Varukorg</h3>
        <p>...</p>

        <h3>Kund info (formulär)</h3>
        <p>...</p>

        <h3>Betalning</h3>
        <button>Till betalning</button>
      </form>
    </>
  )
}

export default App
