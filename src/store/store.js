import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./post.slice";
import productSlice from "./product.slice";

const store = configureStore({
  reducer: {
    post: postSlice,
    product: productSlice,
  },
});

export default store;