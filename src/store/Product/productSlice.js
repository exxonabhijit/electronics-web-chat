import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductById } from "./productActions";

const initialState = {
  products: [],
  loading: false,
  error: null,
  product: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    //! #######  fetch all products  #######
    [fetchAllProducts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchAllProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //! #######  fetch product by id  #######
    [fetchProductById.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchProductById.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    [fetchProductById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
