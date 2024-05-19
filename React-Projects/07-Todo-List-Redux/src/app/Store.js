import { configureStore } from "@reduxjs/toolkit";
import todosliceReducer from "../features/SliceTodo";

export const Store = configureStore({
    reducer: todosliceReducer
})