import React from 'react'
import Checkout from '../components/Checkout'
import Sidebar from '../components/Sidebar'
import CheckoutHeader from '../components/CheckoutHeader'
import { useEffect, useState } from 'react'

export default function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
      setIsLoading(true);
  })
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
