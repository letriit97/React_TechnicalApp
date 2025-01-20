import { LoginRequest, AuthenticationResponse } from '../models/authentication/Authentication'; // Adjust the import path as necessary
import { BaseResult } from '../models/BaseModel';
import api, { LOCAL_STORAGE } from '../helpers/api';

const login = async (model: LoginRequest): Promise<AuthenticationResponse> => {

    return await api.post('api/Authentication/login', model)
        .then((response) => {
            if (response.data.success) {
                localStorage.setItem(LOCAL_STORAGE.TOKEN, response.data.result.token);
                return response.data.result;
            } else {
                return Promise.reject(response.data.message);
            }
        });
};

const getCurrentUser = async (): Promise<BaseResult<AuthenticationResponse>> => {
    return await api.get<BaseResult<AuthenticationResponse>>('api/Authentication/current')
        .then((response) => {
            if (response.data.success) {
                return response.data;
            } else {
                return Promise.reject(response.data.message);
            }
        });
}

const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem(LOCAL_STORAGE.TOKEN);
}

export const authenticationService = {
    login,
    logout
}