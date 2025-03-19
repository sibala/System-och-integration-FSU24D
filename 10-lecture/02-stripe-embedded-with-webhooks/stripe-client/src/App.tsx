import * as React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import './App.css'


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51R3dNv4IeIiri8v79AYFLAkVz5oDQrX9bi0bsO17yBDOkfLakKj3l4hiRybjzR6mfR5VyYRvDBn8oN5Z52itxAZv00UxbvO93v');

function App() {
  const fetchClientSecret = React.useCallback(() => {
    // Create a Checkout Session
    return fetch("http://localhost:3000/stripe/create-checkout-session-embedded", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = {fetchClientSecret};

  return (
    <div id="checkout">
      <h1>Checkout (Embedded)</h1>
      
      <h3>Varukorg</h3>
      <p>...</p>

      <h3>Kund info (formulär)</h3>
      <p>...</p>

      <h3>Betalning</h3>
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}


export default App







