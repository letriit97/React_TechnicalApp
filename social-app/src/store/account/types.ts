import type { AccountInformation, AuthenticationResponse } from "../../models/authentication/Authentication";

 const LOGIN_REQUEST = 'LOGIN_REQUEST';
 const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
 const LOGIN_FAILURE = 'LOGIN_FAILURE';
 const LOG_OUT = 'LOG_OUT';

export type AccountActionTypes = LoginRequest | LoginSuccess | LoginFailure | LogOut;


export interface AuthenticationUser {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    avatar: string;
}


interface LoginRequest {
    type: typeof LOGIN_REQUEST;
    payload: {
        username: string;
        password: string;
    };
}

interface LoginSuccess {
    type: typeof LOGIN_SUCCESS;
    payload: {
        data : AuthenticationResponse;
        token: string;
    };
}

interface LoginFailure {
    type: typeof LOGIN_FAILURE;
    payload: {
        error: string;
    };
}

interface LogOut {
    type: typeof LOG_OUT;
}

export interface AccountState {
    accountInfo?: AccountInformation | null;
    loading: boolean;
    error: string | null;
    token?: string | null;
}




