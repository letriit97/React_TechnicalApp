import accountReducer from './account/reducers';
import {
    persistReducer,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers, configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

// Cấu hình redux-persist
const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ['account'], // Add reducers you want to persist here
};
const reduxPersistActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, "account/logout"];

// Combine your reducers 
const reducer = combineReducers({
    account: accountReducer,
    // Add other reducers heremiddleware: (getDefaultMiddleware) =>

});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, reducer);

// Configure the store

export const reduxStore = configureStore({
    reducer: {
        account: accountReducer,
    }
});

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
            },
        }),
});

// Define the AppState and AppDispatch types
export type AppState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;
