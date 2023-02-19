import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

//! BASE_URL comming from .env file
const BASE_URL = "http://13.234.17.204/api";

//! Fetch All Posts action
export const fetchAllPosts = createAsyncThunk(
    "posts/fetchAllPosts",
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${BASE_URL}/posts`);
            console.log("posts (postsAction) :::", data.data);
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


//! Fetch Post By Id action
export const fetchPostById = createAsyncThunk(
    "posts/fetchPostById",
    async (id, { rejectWithValue }) => {
        console.log("post by id (postsAction) :::", id);
        try {
            const { data } = await axios.get(`${BASE_URL}/posts/${id}`);
            console.log("Post by Id (postsAction) :::", data.data);
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