import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productsReducer from './productsSlice'
export default configureStore({
    reducer:{
        user:userReducer,
        products:productsReducer
    }
})