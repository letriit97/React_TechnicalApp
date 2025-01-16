import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountState } from "./types";
import { AuthenticationResponse } from "../../models/authentication/Authentication";

// 1. Init state
const initialState: AccountState = {
    // accountInfo: null,
    loading: false,
    error: null,
    token: null,
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        loginRequest: state => {
            return {
                ...state,
                loading: true,
                error: null,
            };
        },
        loginSuccess: (state, action: PayloadAction<AuthenticationResponse>) => {
            return {
                ...state,
                loading: false,
                accountInfo: action.payload.accountInfo,
                token: action.payload.token,
            };
        },
        loginFailure: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        },
        logOut: state => {
            return {
                ...state,
                accountInfo: null,
                token: null,
                error: null
            }
        }
    }
});

export const { loginRequest, loginSuccess, loginFailure, logOut } = accountSlice.actions;
export default accountSlice.reducer;