import React from "react"
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/Cart";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Product(props){
    const dispatch = useDispatch();
    const handleAddToCart = () => {
      dispatch(addToCart(props.data))
      
    };

    const notify = () => toast.success('Added to cart', {
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

  
    return(

          <div className="p-3 item rounded-3 justify-content-center text-center align-items-center">
            
            <img src={`${props.data.coverImg}`} alt="coffee table" className="mb-2 w-100" />
            <h5 className="product-title fw-semibold">{props.data.title}</h5>
            <p className="product-price fw-medium">{naira.format(props.data.price)}</p>

            <button className="btn cart-btn me-lg-2 me-2 mb-xxl-2" onClick={() => {
              handleAddToCart();
              notify();
            }}>Add to Cart</button>
            <Link to={`/detail/${props.data.id}`}>
              <button className="btn details-btn">
              Details
              </button>
            
            </Link>
            <ToastContainer />
          </div>   
  )
  
    
  }
