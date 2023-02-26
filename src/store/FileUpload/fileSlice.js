import { createSlice } from "@reduxjs/toolkit";
import { uploadFile } from "./fileActions";
const initialState = {
    loading: false,
    error: null,
    success: false,
    file: null,
    id: [],
};

const fileSlice = createSlice({
    name: "file",
    initialState,
    extraReducers: {
        //! #######  upload file  #######
        [uploadFile.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        [uploadFile.fulfilled]: (state, action) => {
            state.loading = false;
            state.file = action.payload;
            state.success = true;
        },
        [uploadFile.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        },
    },
});

export const {} = fileSlice.actions;

export default fileSlice.reducer;