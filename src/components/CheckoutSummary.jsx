import React from 'react'
import { useSelector } from 'react-redux'


export default function CheckoutSummary() {
  const products = useSelector(store => store.cart.items);

  let naira = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
 const totalAmount = products.reduce((accumulator, item)=>{
if(item.price){
  return accumulator + (item.price * item.quantity);
};

return 0;
 }, 0)
  return (
    
      <div className="col-lg-6 justify-content-center align-items-center">
            <div className="container text-white w-75 py-4 px-3" style={{backgroundColor: "#587657"}}>
              <h2>Summary</h2>
              
              <ul className="d-flex justify-content-between ps-0">
                <li>Order total</li>
                <li>{naira.format(totalAmount)}</li>
              </ul>
              <ul className="d-flex justify-content-between ps-0 mb-0 pb-5">
                <li>Shipping fee</li>
                <li>Free</li>
              </ul>                             
            </div>
            <div className="subtotal w-75 container">
              <ul className="d-flex justify-content-between mb-0 p-4 fw-medium">
                <li>Subtotal</li>
                <li>{naira.format(totalAmount)}</li>
              </ul>
            </div>            
          </div>
    
  )
}
