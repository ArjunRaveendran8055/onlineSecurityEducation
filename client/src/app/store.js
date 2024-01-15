import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/features/cart/cartSlice"
import courseReducer from "../components/features/course/courseSlice";

const store=configureStore({
    reducer:{
        cart:cartReducer,
        course:courseReducer
    }
})

export default store;