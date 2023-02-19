import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPosts, fetchPostById } from "./postsActions";

const initialState = {
    posts: [],
    loading: false,
    error: null,
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: {
        //! #######  fetch all posts  #######
        [fetchAllPosts.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [fetchAllPosts.fulfilled]: (state, action) => {
            console.log("posts (postsSlice):::", action.payload);
            state.loading = false;
            state.posts = action.payload;
        },
        [fetchAllPosts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        //! #######  fetch post by id  #######
        [fetchPostById.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [fetchPostById.fulfilled]: (state, action) => {
            console.log("post by Id (postsSlice):::", action.payload);
            state.loading = false;
            state.posts = action.payload;
        },
        [fetchPostById.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {} = postsSlice.actions;

export default postsSlice.reducer;
