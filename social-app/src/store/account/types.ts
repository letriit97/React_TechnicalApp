import type { AuthenticationResponse } from "../../models/authentication/Authentication";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOG_OUT = 'LOG_OUT';

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
    accountInfo: AuthenticationResponse | null;
    loading: boolean;
    error: string | null;
    token: string | null;
}




