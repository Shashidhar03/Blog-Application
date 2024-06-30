import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isClicked: false,
    };

const blogDetailSlice = createSlice({
    name: "blogDetail",
    initialState,
    reducers: {
        clicked: (state) => {
            state.isClicked = !state.isClicked;
        },
    },
});

export const { clicked } = blogDetailSlice.actions;

export default blogDetailSlice.reducer;
