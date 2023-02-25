import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

//! BASE_URL comming from .env file
const BASE_URL = import.meta.env.VITE_BASE_URL;

//! Fetch All Posts action
export const fetchAllPosts = createAsyncThunk(
    "posts/fetchAllPosts",
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${BASE_URL}/posts`);
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


//! Fetch Post By Id action
export const fetchPostById = createAsyncThunk(
    "posts/fetchPostById",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${BASE_URL}/posts/${id}`);
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