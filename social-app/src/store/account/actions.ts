import { Dispatch } from "react"
import { LOGIN_REQUEST, AccountActionTypes, LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT } from "./types"
import { LoginRequest } from "../../models/authentication/Authentication"
import { authenticationService } from "../../services/idnex"
import { history } from "../../helpers"

export const login = (model: LoginRequest, returnUrl: string) => {
    return (dispatch: Dispatch<AccountActionTypes>) => {
        dispatch({
            type: LOGIN_REQUEST,
            payload: {
                username: model.username,
                password: model.password
            }
        });

        authenticationService.login(model).then(
            response => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {
                        data: response,
                        token: response.token
                    }
                });

                // Quay về trang trước đó
                history.push(returnUrl);
            },
            error => {
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: {
                        error: error
                    }
                });
            }
        )
    }
}

export const logout = (): AccountActionTypes => {
    return { type: LOG_OUT }
}