import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin, registerUser, getUserInfo } from "./authActions";

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  userToken: null,
  success: false,
  userDetail: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //! #######  logout user  #######
    logoutUser: (state) => {
      localStorage.removeItem("userToken");
      state.userInfo = null;
      state.userToken = null;
      state.userDetail = null;
      state.error = null;
    }
  },
  extraReducers: {
    //! #######  login user  #######
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.userToken = action.payload.userToken;
    },
    [userLogin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    //! #######  register user  #######
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false
      state.success = true //! registration successful
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    //! #######  get user info  #######
    [getUserInfo.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getUserInfo.fulfilled]: (state, action) => {
      state.loading = false
      state.userDetail = action.payload
    },
    [getUserInfo.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
