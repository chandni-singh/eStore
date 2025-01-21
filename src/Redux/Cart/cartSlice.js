import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalItemsPrice: 0,
  totalItems: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      let itemExists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      state.cartItems = [...state.cartItems, action.payload];
      state.totalItems = ++state.totalItems;
      state.totalQuantity = ++state.totalQuantity;
      state.totalItemsPrice = state.totalItemsPrice + action.payload.price;

      if (!itemExists) {
        state.totalItems = ++state.totalItems;
      }
    },
  },
});

export const { addCartItem } = cartSlice.actions;
export default cartSlice.reducer;
