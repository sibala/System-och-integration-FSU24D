import dotenv from 'dotenv';
import cors from 'cors';
import express, { Request, Response } from 'express';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/stripe/create-checkout-session-hosted', async (req: Request, res: Response) => {

  // Snappa upp line_items och order_id från req: Request
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'SEK',
          product_data: {
            name: 'Rikards Tårta',
          },
          unit_amount: 5 * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:5173/order-confirmation?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'http://localhost:5173/checkout',
    client_reference_id: '123' // order_id skall in här
  });


  res.json({checkout_url: session.url, session_id: session.id});

  // res.redirect(303, session.url);
});



const port = 3000;  
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})
