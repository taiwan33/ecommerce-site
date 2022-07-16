import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import { db } from "../firebaseConfig";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
