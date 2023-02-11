import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
  IDEL: "idel",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    posts: [],
    status: STATUSES.IDEL,
    status1: STATUSES.IDEL,
  },

  //2. when you used createAsynchThunk method
  extraReducers: (builder) => {
    //fetching products
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDEL;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });

    //fetching products
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status1 = STATUSES.LOADING;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status1 = STATUSES.IDEL;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status1 = STATUSES.ERROR;
      });
  },
});

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  console.log("res data products :::", res.data);
  const data = res.data;
  return data;
});

export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log("res data post :::", res.data);
  const data = res.data;
  return data;
});

export const { setProducts, setStatus, setPosts } = productSlice.actions;
export default productSlice.reducer;
