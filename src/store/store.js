import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth/authSlice";
import postsSlice from "./Posts/postsSlice";
import productSlice from "./Product/productSlice";
import fileSlice from "./FileUpload/fileSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    posts: postsSlice,
    products: productSlice,
    file: fileSlice,
  },
});

export default store;
