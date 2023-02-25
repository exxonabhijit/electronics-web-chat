import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

//! BASE_URL comming from .env file
const BASE_URL = import.meta.env.VITE_BASE_URL;

//! Fetch All Products action
export const fetchAllProducts = createAsyncThunk(
    "products/fetchAllProducts",
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${BASE_URL}/product`);
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

//! Fetch Product By Id action
export const fetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${BASE_URL}/product/${id}`);
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