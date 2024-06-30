import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    userID:"",
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        },
        setUserInfo: (state, action) => {
            state.userID = action.payload;
        },
    },
});

export const { login, logout, setUserInfo } = userSlice.actions;

export default userSlice.reducer;