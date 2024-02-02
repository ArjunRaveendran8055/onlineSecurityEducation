import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/features/cart/cartSlice"
import courseReducer from "../components/features/course/courseSlice";
import bookReducer from "../components/features/book/bookSlice";
import {persistStore,persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage";

const persistConfig={
    key:'root',
    storage
}

const persistedCartReducer=persistReducer(persistConfig,cartReducer)
const persistedCourseReducer=persistReducer(persistConfig,courseReducer)
const persistedBookReducer=persistReducer(persistConfig,bookReducer)

const store=configureStore({
    reducer:{
        cart:persistedCartReducer,
        course:persistedCourseReducer,
        book:persistedBookReducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck:false},),
})

const persistor=persistStore(store)

export {store,persistor}