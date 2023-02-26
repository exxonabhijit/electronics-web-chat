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

//! create post action
export const createPost = createAsyncThunk(
    "posts/createPost",
    async (payload, { rejectWithValue }) => {
        let token = localStorage.getItem("userToken");
        try {
            const { data } = await axios.post(`${BASE_URL}/posts`, payload, 
                {
                    headers: {
                      Authorization: `Bearer ${token}`,
                      'Content-Type': 'application/json'
                    },
                  }
            );
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

//! create comment action
export const createComment = createAsyncThunk(
  "posts/createComment",
  async (payload, { rejectWithValue }) => {
    let token = localStorage.getItem("userToken");
    try {
      const { data } = await axios.post(
        `${BASE_URL}/posts/comments/${payload.id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        }
      );
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
