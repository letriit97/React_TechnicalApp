import { createSlice, PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";
import { AccountState } from "./types";
import { AuthenticationResponse, LoginRequest } from "../../models/authentication/Authentication";
import { authenticationService } from "../../services/authentication.service";
import { history, LOCAL_STORAGE } from "../../helpers"


// 1. Init state
const initialState: AccountState = {
    accountInfo: null,
    loading: false,
    error: null,
    token: null,
    
}

let returnUrl = null;

export const fetch_Login = createAsyncThunk('account/login', async (model: LoginRequest) => {
    returnUrl = model.returnUrl;
    const response = await authenticationService.login(model);
    return response;
});

export const fetch_Logout = createAsyncThunk('account/logout', async () => {
    return function logout() {
        // remove user from local storage to log user out
        localStorage.removeItem(LOCAL_STORAGE.TOKEN);
    }
});

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
    },
    extraReducers(builder) {
        // Login State
        builder.addCase(fetch_Login.pending, (state) => {
            state.error = null;
            state.loading = true;
        });
        builder.addCase(fetch_Login.fulfilled, (state, action) => {
            state.loading = false;
            state.accountInfo = action.payload.accountInfo;
            state.token = action.payload.token;
            // Quay về trang trước đó
            history.push(returnUrl);
        });
        builder.addCase(fetch_Login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        // Logout State
        builder.addCase(fetch_Logout.fulfilled, (state) => {
            state.error  = null;
            state.accountInfo = null;
            state.token = null;
            history.push("/dang-xuat");
        });
        
    },
});

export const { loginRequest, loginSuccess, loginFailure, logOut } = accountSlice.actions;
export default accountSlice.reducer;