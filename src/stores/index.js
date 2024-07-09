import { configureStore } from "@reduxjs/toolkit";
import cartreducer from './Cart'

export const store = configureStore({
  reducer: {
    cart: cartreducer
  }
})