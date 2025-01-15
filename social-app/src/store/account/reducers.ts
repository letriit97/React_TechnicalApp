import { LOG_OUT, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, AccountActionTypes, AccountState } from "./types";

const initialState: AccountState = {
    accountInfo: null,
    loading: false,
    error: null,
    token: null,
}

const accountReducer = (
    state: AccountState = initialState,
    action: AccountActionTypes
): AccountState => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                accountInfo: action.payload.data,
                token: action.payload.token,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        case LOG_OUT:
            return {
                ...state,
                accountInfo: null,
                token: null,
                error: null
            };
        default:
            return state;
    }
}
export default accountReducer;