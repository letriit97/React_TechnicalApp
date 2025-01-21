import accountReducer from './account/reducers';
import financialFundReducer from './financial_fund/financial_fund_reducers';
import {
    persistReducer
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers, configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

// Cấu hình redux-persist
const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: [
        'account',
        'financialFund'
    ], // Add reducers you want to persist here
};

// Combine your reducers 
const reducer = combineReducers({
    account: accountReducer,
    // Add other reducers heremiddleware: (getDefaultMiddleware) =>
    financialFund: financialFundReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, reducer);

// Configure the store

// export const reduxStore = configureStore({
//     reducer: {
//         account: accountReducer,
//     }
// });

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
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<any>>;
