import React from 'react'
import Sidebar from '../components/Sidebar'
import CartPageHeader from '../components/CartPageHeader'
import CartPageProducts from '../components/CartPageProducts'
import CartPageSummary from '../components/CartPageSummary'


export default function Cart() {
  return (
    <div className='cart-page'>
      <Sidebar />
      <CartPageHeader />
      <div className="container">
      <div className="row my-5">
        
        <CartPageProducts />
        <CartPageSummary />

      </div>

      </div>
    </div>
  )
}
