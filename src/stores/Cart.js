import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  statusTab: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, {payload}) {
      const doesProductExist = Boolean(
        state.items.find((item) => item.id === payload.id)
      );
      if (doesProductExist) {
        const updatedItems = state.items.map(item =>{
          console.log("payload id:, ", payload.id);
          console.log("item id: , ", item.id)
          if(item.id === payload.id){
         
            return ({
              ...item,
              quantity: item.quantity + 1,
            })
          }
          else{
            return item;
          }
        });
        return {
          ...state,
          items: updatedItems,
        };
      } else {
        const newProduct = {
          ...payload,
          quantity: 1,
        };
        return {
          ...state,
          items: [...state.items, newProduct],
        };
      }
    },
    removeFromCartSingle (state, {payload}) {
  const existingProduct = state.items.find(item => item.id === payload);
  const doesProductExist = Boolean(existingProduct);
  if(doesProductExist){
    const updatedProducts = state.items.map(item =>{      
      if(item.id === payload){
        return ({
          ...item,
          quantity: item.quantity - 1,
        })
      }
      else{
        return item;
      }
    });
    return {
      ...state,
      items: updatedProducts
    }
  };
  
    },
    removeFromCartBulk (state, {payload}) {
      
      return ({
        ...state,
        items: state.items.filter( item => item.id !== payload)
      })
      
    }
  },
});
export const { addToCart, removeFromCartSingle, removeFromCartBulk } = cartSlice.actions;
export default cartSlice.reducer;
