import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

//! BASE_URL comming from .env file
const BASE_URL = "http://13.234.17.204/api";

//! Fetch All Products action
export const fetchAllProducts = createAsyncThunk(
    "products/fetchAllProducts",
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${BASE_URL}/product`);
            console.log("products data (productActions):::", data);
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

//! Fetch Product By Id action
export const fetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${BASE_URL}/product/${id}`);
            console.log("single product data :::", data);
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