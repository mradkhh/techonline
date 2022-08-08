import axios from "axios";
import {AuthResponse} from "models/response/AuthResponse";
import {getAccessToken, getRefreshToken, setAccessToken} from "utils/tokenStorage";

export const API_URL = 'http://api.kom-store.exadot.io/api/v1/'

const $api = axios.create({
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers = {
        Authorization: `Bearer ${getAccessToken()}`,
    }
    return config
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        if (getRefreshToken()) {
            try {
                    const res = await axios.post<AuthResponse>(`${API_URL}me/refresh/`, { refresh: getRefreshToken() })
                    setAccessToken(res.data.access)
                    return $api.request(originalRequest)
            } catch (e: any) {
                console.log('Not auth - ' + e.message)
                alert("Not")
            }
        }
    }
    throw error
})

export default $api