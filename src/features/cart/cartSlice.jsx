import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems.js";
// console.log(cartItems);

const initialState = {
  cartItems: cartItems,
  amount: 1, // or quantity of d specific item
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

console.log(cartSlice);
export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
