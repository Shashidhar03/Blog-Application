import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/userSlice.js';
import blogDetailReducer from './redux/blogDetailSlice.js';

export default configureStore({
    reducer: {
        user: userReducer,
        blogDetail: blogDetailReducer,
    },
    });
    
