import React, { useEffect, useState } from 'react'
import { addToCart, removeFromCartSingle } from '../stores/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


export default function Details(props) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(props.data))
  };
  const handleRemoveFromCart = ()=>{
    dispatch(removeFromCartSingle(props.data.id))
  }

  let naira = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const products = useSelector(store => store.cart.items); 
  const activeProduct = products.find((item) => {
    return item.id === props.data.id
  });
const [activeImage, setActiveImage] = useState(props.data.coverImg)
  return (
    <div className="container">
      <div className="container my-5 d-lg-flex flex-lg-row justify-content-center align-items-center text-center rounded-5">
        <div className="container p-5">
          
          <img src={`${activeImage}`} className="w-100" alt="" />
          <div className="d-flex g-1 mt-2">
          {
            props.data.photos.map(photo => (
              <button 
              key={photo.url}
              onClick={
                ()=>{
                  setActiveImage(photo.url)
                }
              }
              className="border me-2"
              >
                <img 
              src={photo.url} 
              style={{
                width: "50px"
              }}              
              alt=""  />
              </button>
            ))
          }
          </div>
        </div>
        <div className="container my-3">
          <p className="detail-title">
            {props.data.title}
          </p>
          <p className="detail-price fw-bold">
            {naira.format(props.data.price)}
          </p>
           
  {
    activeProduct ? (
      <div className="container my-3">
      <button className="btn shadow me-2" onClick={handleRemoveFromCart}>
      <i className="bi bi-dash"></i>          
      </button>
      <span>{activeProduct.quantity}</span>
      <button className="btn shadow me-2" onClick={handleAddToCart}>
      <i className="bi bi-plus"></i>
      </button>
    </div>
    ) : (
      <button className="btn cart-btn me-lg-2 me-2 mb-xxl-2" onClick={handleAddToCart}>Add to Cart</button> 
    )
  }
        </div>
    
      </div>
  </div>
  )
}
