import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    pName: "Jacket",
    price: 45,
    img: "shop-1.jpg",
  },
  {
    pName: "Purse",
    price: 38,
    img: "shop-2.jpg",
  },
  {
    pName: "Dress",
    price: 50,
    img: "shop-3.jpg",
  },
  {
    pName: "Jacket",
    price: 25,
    img: "shop-4.jpg",
  },
  {
    pName: "Boots",
    price: 65,
    img: "shop-5.jpg",
  },
];

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    filterByPrice: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { filterByPrice } = productSlice.actions;
export default productSlice;
