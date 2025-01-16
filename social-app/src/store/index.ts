import accountReducer from './account/reducers';

import {
    persistStore,
    persistReducer,
    PersistConfig,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// Cấu hình redux-persist
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['account'], // Add reducers you want to persist here
};
const reduxPersistActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

// Combine your reducers 
const rootReducer = combineReducers({
    account: accountReducer,
    // Add other reducers heremiddleware: (getDefaultMiddleware) =>

});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [...reduxPersistActions],
            },
        }),
});

// Define the AppState and AppDispatch types
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
