import React from 'react'
import Checkout from '../components/Checkout'
import Sidebar from '../components/Sidebar'
import CheckoutHeader from '../components/CheckoutHeader'

export default function CheckoutPage() {
  return (
    <>
      <Sidebar/>
    <div className="checkout-page ">
          <CheckoutHeader />
          <div className="container my-5">
          <div className="row">
              <Checkout />

          </div>

          </div>
    </div>
    
    </>
  )
}
