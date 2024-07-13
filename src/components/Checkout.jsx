import React from 'react'
import CheckoutSummary from './CheckoutSummary';
import { useSelector } from 'react-redux'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Checkout() {

  const notify = () => toast.success('Success', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });;

  let naira = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const products = useSelector(store => store.cart.items); 
  const totalAmount = products.reduce((accumulator, item)=>{
  if(item.price){
   return accumulator + (item.price * item.quantity);
 };
 return 0;
  }, 0)
  return (   
    <>
      <div className="col-lg-6 billing px-5 mb-5">
        <p className="fw-bold text-black">Billing Information</p>
        <form onSubmit={(event) => {
          event.preventDefault();
        }}>
          <label className="form-label" for="Country">Country/region</label>
          <input className="form-control mb-3 rounded-0" type="text"/>
          
          <div className="row">
            <div className="col-sm-6">
              <label className="form-label" for="firstName">First Name</label>
              <input className="form-control mb-3 rounded-0" type="text"/>
            </div>
            <div className="col-sm-6">
              <label className="form-label" for="lastName">Last Name</label>
              <input className="form-control mb-3 rounded-0" type="text"/>
            </div>
          </div>
                    
          <label className="form-label" for="address">Address</label>
          <input className="form-control mb-3 rounded-0" type="text"/>

          <div className="row">
            <div className="col-sm-6">
              <label className="form-label" for="postalCode">Postal Code</label>
              <input className="form-control mb-3 rounded-0" type="text"/>
            </div>
            <div className="col-sm-6">
              <label className="form-label" for="town">Town/City</label>
              <input className="form-control mb-3 rounded-0" type="text"/>
            </div>
          </div>
                    
          <label className="form-label" for="contactNumber">Contact Number</label>
          <input className="form-control mb-3 rounded-0" type="text"/>


          <div className="container text-center">
            <p>Select payment option</p>
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
            <label className="form-check-label" for="flexRadioDefault2">
              Card
            </label>
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
            <label className="form-check-label" for="exampleRadios3">
              Paypal
            </label>
          </div>
          
          <label className="form-label" for="Card Number">Card Number</label>
          <input className="form-control mb-3 rounded-0" type="number"/>

          <div className="row">
            <div className="col-sm-7">
              <label className="form-label" for="expirationDate">Expiration Date</label>
              <input className="form-control mb-3 rounded-0" type="text"/>
            </div>
            <div className="col-sm-5">
              <label className="form-label" for="cvv">CVV</label>
              <input className="form-control mb-3 rounded-0" type="number"/>
            </div>
          </div>                

          <div className="py-4 bill-total px-3 my-3">
            <ul className="d-flex ps-0 align-items-center mb-0 justify-content-between text-black fw-semibold">
              <li>Total</li>
              <li>{naira.format(totalAmount)}</li>
            </ul>
          </div>
          <button className="cart-btn text-white" onClick={notify}>PAY NOW</button>
        </form>

      </div>
      <CheckoutSummary />  
      <ToastContainer />

    </>         
  )
}
