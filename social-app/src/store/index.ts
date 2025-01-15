import { combineReducers, } from "redux";
import accountReducer from "./account/reducers";

import { configureStore } from '@reduxjs/toolkit';

// Tạo Route mới cho trang Admin
const rootReducer = combineReducers({
    account: accountReducer,
});

const store = configureStore({
    reducer: rootReducer,
    // Add any middleware if needed
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;