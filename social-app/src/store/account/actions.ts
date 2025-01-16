import { Dispatch } from "react"
import { LoginRequest, AuthenticationResponse } from "../../models/authentication/Authentication"
import { authenticationService } from "../../services/idnex"
import { history } from "../../helpers"
import { loginRequest, loginSuccess, loginFailure, logOut } from "./reducers"

export const login = (model: LoginRequest, returnUrl: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch({
            type: loginRequest,
            payload: <LoginRequest>{
                username: model.username,
                password: model.password
            }
        });

        authenticationService.login(model).then(
            (response: AuthenticationResponse) => {
                dispatch({
                    type: loginSuccess,
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
                    type: loginFailure,
                    payload: {
                        error: error
                    }
                });
            }
        )
    }
}

export const logout = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch({
            type: logOut
        });
    }
}