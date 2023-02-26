import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

//! BASE_URL comming from .env file
const BASE_URL = import.meta.env.VITE_BASE_URL;

//! File Upload action
export const uploadFile = createAsyncThunk(
  "file/uploadFile",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/files`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
