import api  from "./api";


 /**
 * Set Token to the header for the API
 *
 * @param {string} token
 */
export const setAuthToken = (token: string) => {
    if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common["Authorization"];
    }
}