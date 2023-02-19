import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

//! BASE_URL comming from .env file
const BASE_URL = "http://13.234.17.204/api";

//! Login User action
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });

      localStorage.setItem("userToken", data.access_token);

      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        console.log("error.response.data.message", error.response.data.message);
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//! Register User action
export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email, password, phone, name }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/register`, {email, password, phone, name});
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        console.log("error.response.data.message", error.response.data.message);
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
