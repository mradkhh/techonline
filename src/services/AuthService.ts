import axios, {AxiosResponse} from "axios";
import {AuthResponse} from "models/response/AuthResponse";
import $api from "./interseptors";

export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/me/', { username, password })
    }

    static async register(username: string, password: string, confirm_password: string): Promise<AxiosResponse<AuthResponse>> {
        return axios.post<AuthResponse>('/user/register/', { username, password, confirm_password })
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }
}