import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

export default function CartPageProducts() {  
  const products = useSelector(store => store.cart.items); 
    
  return (
          <div className="col-lg-6 ">
            <div className="row">
            {products.map((item, key) => 
              <CartItem key={key} data={item}/>
            )}
            </div>
          </div>                    
  )
}
