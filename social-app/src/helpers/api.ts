import axios from "axios";
import env from "react-dotenv";

export const LOCAL_STORAGE = {
    TOKEN: "Technical_App_Token",
    ACCOUNT_INFO: "Technical_App_Account_Info",
}

const api = axios.create({
    baseURL: env.API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem(LOCAL_STORAGE.TOKEN);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem(LOCAL_STORAGE.TOKEN);
            window.location.reload();
        }
        return Promise.reject(error);
    }
);

export default api;