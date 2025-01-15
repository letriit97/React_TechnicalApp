import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import accountReducer from './account/reducers';

// Define the persist configuration
const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage,
    whitelist: ['account'], // Add reducers you want to persist here
};

// Combine your reducers
const rootReducer = combineReducers({
    account: accountReducer,
    // Add other reducers here
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
    reducer: persistedReducer,
    // Add any middleware if needed
});

// Define the AppState and AppDispatch types
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export the store and persistor
export default () => {
    let persistor = persistStore(store);
    return { store, persistor };
};