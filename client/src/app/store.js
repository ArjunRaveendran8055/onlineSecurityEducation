import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/features/cart/cartSlice"
import courseReducer from "../components/features/course/courseSlice";
import bookReducer from "../components/features/book/bookSlice";
const store=configureStore({
    reducer:{
        cart:cartReducer,
        course:courseReducer,
        book:bookReducer
    }
})

export default store;