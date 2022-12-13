import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import PostReducer from "./postSlice";
const store=configureStore({
    reducer:{users:UserReducer,Post:PostReducer},
})
export default store;
