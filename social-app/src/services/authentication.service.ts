import env from 'react-dotenv'; // Adjust the import path as necessary
import { LoginRequest, AuthenticationResponse } from '../models/authentication/Authentication'; // Adjust the import path as necessary
import { BaseResult } from '../models/BaseModel';

const login = (model: LoginRequest): Promise<AuthenticationResponse> => {
    
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(model),
    };
    
    return fetch(`${env.API_URL}api/Authentication/login`, request)
        .then(handleResponse)
        .then((data: BaseResult<AuthenticationResponse>) => {
            if (data.success) {
                localStorage.setItem('react_token', data.result.token);
                return data.result;
            } else {
                return Promise.reject(data.message);
            }
        }
    ); 
};

const handleResponse = (response: any) => {
    return response.text().then((text: string) => {
        const data = text && JSON.parse(text);
        if (!response.ok) 
        {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('react_token');
}

export const authenticationService = { 
    login,
    logout
}