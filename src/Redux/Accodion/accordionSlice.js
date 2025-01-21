import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    category: "Men",
    items: ["Coats", "Jacket", "Party Wear", "Shirts"],
  },
  {
    category: "Women",
    items: ["Coats", "Jacket", "Party Wear", "Shirts"],
  },
  {
    category: "Kids",
    items: ["Coats", "Jacket", "Party Wear", "Shirts"],
  },
];

const accordionCatSlice = createSlice({
  name: "Accordion Slice",
  initialState,
});

export default accordionCatSlice;
