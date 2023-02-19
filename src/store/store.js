import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth/authSlice";
import postsSlice from "./Posts/postsSlice";
import productSlice from "./Product/productSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    posts: postsSlice,
    products: productSlice,
  },
});

export default store;
