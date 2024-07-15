import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCartBulk, removeFromCartSingle } from '../stores/Cart';

export default function CartItem(props) {
  const {productId, quantity} = props.data;
  
  const dispatch = useDispatch();

  const handleAddToCart =()=>{
    dispatch(addToCart(props.data))
  }
  const handleRemoveFromCart = ()=>{
    dispatch(removeFromCartSingle(props.data.id))
  }
  const handleRemoveBulk = ()=>{
    dispatch(removeFromCartBulk(props.data.id))
  }

  let naira = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
  return (
    
      <div className="col container p-0 my-3 px-3">          
        <div className="d-flex align-items-center justify-content-between product-cart px-4 py-3">            
                <img src={props.data.coverImg} alt="" className="my-cart-img p-1 rounded-3 mx-2" />
                <span>{props.data.title}</span>
                <div className='d-flex'>
                  <button className='btn' onClick={handleRemoveFromCart}><i className="bi bi-dash"></i></button>
                  <span className="p-3 rounded-3 " style={{border: "1px solid #B1AEAE"}}>{quantity}</span>
                  <button className='btn' onClick={handleAddToCart}><i className="bi bi-plus"></i></button>
                  
                </div>
                <span>{naira.format(props.data.price * quantity)}</span>
                <button className='btn' onClick={handleRemoveBulk}><i className="bi bi-x"></i></button>
        </div>            
      </div>
    
  )
}
