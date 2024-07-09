import React from "react"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/Cart";


export default function Product(props){
    const dispatch = useDispatch();
    const handleAddToCart = () => {
      dispatch(addToCart(props.data))
    };
    return(

          <div className="p-3 item rounded-3 justify-content-center text-center align-items-center">
            
            <img src={`assets/img/${props.data.coverImg}`} alt="coffee table" className="mb-2 w-100" />
            <h5 className="product-title fw-semibold">{props.data.title}</h5>
            <p className="product-price fw-medium">&#8358;{props.data.price},000</p>

            <button className="btn cart-btn me-lg-2 me-2 mb-xxl-2" onClick={handleAddToCart}>Add to Cart</button>
            <button className="btn details-btn">Details</button>
          </div>   
  )
  
    
  }
