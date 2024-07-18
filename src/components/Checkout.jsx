import React, { useState, useEffect } from 'react'
import CheckoutSummary from './CheckoutSummary';
import { useSelector } from 'react-redux'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Checkout() {
  const initialValues = {country:"", firstName: "",lastName: "", address:"", postalCode:"", town:"", contactNumber:"", cardNumber:"", expDate:"", cvv:""};
  const[formValues, setFormValues] = useState(initialValues);
  const[formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) =>  {    
    const {name, value} = e.target
    setFormValues((previousState)=>{
      return (
        {...previousState, [name]: value}
      )
    });
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    
    if(Object.keys(formErrors).length === 0 && isSubmit){
      
    }
  }, [formErrors])

  const validate = (values) => {
    const error = {}
    if(!values.country){
      error.country =  "Country is required";
    }
    if(!values.firstName){
      error.firstName =  "First Name is required";
    }
    if(!values.lastName){
      error.lastName =  "Last Name is required";
    }
    if(!values.address){
      error.address =  "Address is required";
    }
    if(!values.postalCode){
      error.postalCode =  "Postal Code is required";
    }
    if(!values.town){
      error.town =  "Town/City is required";
    }
    if(!values.contactNumber){
      error.contactNumber =  "Contact Number is required";
    }
    if(!values.cardNumber){
      error.cardNumber =  "Card Number is required";
    }
    if(!values.expDate){
      error.expDate =  "Exp. Date is required";
    }
    if(!values.cvv){
      error.cvv =  "CVV is required";
    }
    return error;
    
  }

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
        <form onSubmit={handleSubmit}>
          <label className="form-label" for="Country">Country/region</label>
          <input className="form-control mb-3 rounded-0" type="text" value={formValues.country} name="country" onChange={handleChange}/>
          <p>{formErrors.country}</p>
          <div className="row">
            <div className="col-sm-6">
              <label className="form-label" for="firstName">First Name</label>
              <input className="form-control mb-3 rounded-0" type="text" value={formValues.firstName} name='firstName' onChange={handleChange}/>
          <p>{formErrors.firstName}</p>

            </div>
            <div className="col-sm-6">
              <label className="form-label" for="lastName">Last Name</label>
              <input className="form-control mb-3 rounded-0" type="text" value={formValues.lastName} name='lastName' onChange={handleChange}/>
          <p>{formErrors.lastName}</p>
    
            </div>
          </div>
                    
          <label className="form-label" for="address">Address</label>
          <input className="form-control mb-3 rounded-0" type="text" value={formValues.address} name='address' onChange={handleChange}/>
          <p>{formErrors.address}</p>


          <div className="row">
            <div className="col-sm-6">
              <label className="form-label" for="postalCode">Postal Code</label>
              <input className="form-control mb-3 rounded-0" type="text" value={formValues.postalCode} name='postalCode' onChange={handleChange}/>
          <p>{formErrors.postalCode}</p>

            </div>
            <div className="col-sm-6">
              <label className="form-label" for="town">Town/City</label>
              <input className="form-control mb-3 rounded-0" type="text" value={formValues.town} name='town' onChange={handleChange}/>
          <p>{formErrors.town}</p>

            </div>
          </div>
                    
          <label className="form-label" for="contactNumber">Contact Number</label>
          <input className="form-control mb-3 rounded-0" type="text" value={formValues.contactNumber} name='contactNumber' onChange={handleChange}/>
          <p>{formErrors.contactNumber}</p>


          <div className="container text-center">
            <span className='d-block py-3'>Select payment option</span>
            <input className="form-check-input required" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
            <label className="form-check-label" for="flexRadioDefault2">
              Card
            </label>
            <input className="form-check-input required" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
            <label className="form-check-label" for="exampleRadios3">
              Paypal
            </label>
          </div>
          
          <label className="form-label" for="Card Number">Card Number</label>
          <input className="form-control mb-3 rounded-0" type="number" value={formValues.cardNumber} name='cardNumber' onChange={handleChange}/>
          <p>{formErrors.cardNumber}</p>

          <div className="row">
            <div className="col-sm-7">
              <label className="form-label" for="expirationDate">Expiration Date</label>
              <input className="form-control mb-3 rounded-0" type="text" value={formValues.expDate} name='expDate' onChange={handleChange}/>
          <p>{formErrors.expDate}</p>

            </div>
            <div className="col-sm-5">
              <label className="form-label" for="cvv">CVV</label>
              <input className="form-control mb-3 rounded-0" type="number" value={formValues.cvv} name='cvv' onChange={handleChange}/>
          <p>{formErrors.cvv}</p>

            </div>
          </div>                

          <div className="py-4 bill-total px-3 my-3">
            <ul className="d-flex ps-0 align-items-center mb-0 justify-content-between text-black fw-semibold">
              <li>Total</li>
              <li>{naira.format(totalAmount)}</li>
            </ul>
          </div>
          <input className="cart-btn text-white" onClick={
            () => {
              // notify();
            }
          } value='PAY NOW' type='submit'/>
        </form>

      </div>
      <CheckoutSummary />  
      <ToastContainer />

    </>         
  )
}
