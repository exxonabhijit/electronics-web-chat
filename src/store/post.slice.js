import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {},

  reducers: {
    AddToCart(state, action) {
      state.push(action.payload);
    },

    RemoveFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { AddToCart, RemoveFromCart } = postSlice.actions;
export default postSlice.reducer;
