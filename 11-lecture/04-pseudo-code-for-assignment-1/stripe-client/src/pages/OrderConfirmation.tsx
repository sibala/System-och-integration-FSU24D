import React, { useEffect } from 'react'

export const OrderConfirmation = () => {


  useEffect(() => {
    // Snappa upp Querystring parametern session_id,
    // -> order-confirmation?session_id=cs_test....
    // från URLen, med hjälp av useSearchParams()

    // Använd session_id värdet från URLen för att hämta specifik order
    // Med följande anrop: GET/orders/payment/:id 
    // där :id är session_id

    // Se till att uppdatera ordern med följande
    //   payment_status=“Paid”
    //   payment_id= session_id
    //   order_status=“Received”


    // Radera kundninfo och cart från localstorage


    // Använd order för att visa orderinfo på denna sida
  })
  return (
    <div>OrderConfirmation</div>
  )
}
