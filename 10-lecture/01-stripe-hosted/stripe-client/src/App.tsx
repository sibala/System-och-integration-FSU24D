import { FormEvent } from 'react'
import './App.css'

function App() {

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('http://localhost:3000/stripe/create-checkout-session-hosted', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({}) // ????? lista ut själva
      });

      const data = await response.json();
      // console.log(data.checkout_url);

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
