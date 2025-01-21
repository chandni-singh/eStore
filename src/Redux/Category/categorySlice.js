import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./actions";

const initialState = {
  categories: [],
  status: "idle",
  error: "",
};

const categorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase("pending", (state, action) => {
        state.status = "Loading...";
      })
      .addCase("fulfilled", (state, action) => {
        state.status = "Success";
        state.categories = action.payload;
      })
      .addCase("error", (state, action) => {
        state.status = "Error";
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
