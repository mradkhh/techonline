import axios, {AxiosResponse} from "axios";
import {AuthResponse} from "models/response/AuthResponse";
import $api, {API_URL} from "./interseptors";
import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ICartResults, ICategories} from "models/index";
import {getAccessToken} from "utils/tokenStorage";

interface ILogin {
    username: string,
    password: string
}

interface IRegister {
    username: string,
    password: string,
    confirm_password: string
}

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

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints(builder)  {
        return {
            fetchLogin: builder.mutation<any, ILogin>({
                query: ({ username, password }) => ({
                    url: 'me/',
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    },
                    body: {
                        username,
                        password
                    }
                }),
            }),
            fetchRegister: builder.mutation<any, IRegister>({
                query: ({ username, password, confirm_password }) => ({
                    url: '/user/register/',
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    },
                    body: {
                        username,
                        password,
                        confirm_password
                    }
                }),
            }),
            fetchLogout: builder.query<any, IRegister>({
                query: ({ username, password, confirm_password }) => ({
                    url: '/user/register/',
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    },
                    body: {
                        username,
                        password,
                        confirm_password
                    }
                }),
            })
        }
    }
})

export const  { useFetchLoginMutation, useFetchRegisterMutation } = authApi