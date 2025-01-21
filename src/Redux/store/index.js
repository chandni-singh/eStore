import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../Category/categorySlice";
import cartSlice from "../Cart/cartSlice";

const store = configureStore({
  reducer: {
    categoryReducer: categorySlice,
    cr: cartSlice,
  },
});

export default store;
