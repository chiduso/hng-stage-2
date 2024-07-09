import React from 'react'

export default function CartPageHeader() {
  return (    
      <div className="container pt-2">
          <ul className="d-flex justify-content-between align-items-center mb-0 p-0 pt-2 cart-nav">
            <li className="my-cart">
              <h4>MY CART</h4>
            </li>
            <li>
              <img src="assets/img/Group 1.png" alt="" className="me-1" />
              <span>Hi Joyous</span>
            </li>
          </ul>      
        </div>    
  )
}
