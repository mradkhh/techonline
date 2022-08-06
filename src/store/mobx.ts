import {makeAutoObservable} from "mobx";
import axios from "axios";
import AuthService from "services/AuthService";
import { RefreshResponse } from "models/response/AuthResponse";
import {API_URL} from "services/interseptors";
import {
    getAccessToken,
    removeAccessToken, removeRefreshToken,
    setAccessToken,
    setRefreshToken
} from "utils/tokenStorage";


export default class Store {
    isAuth = !!(getAccessToken())
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool
    }

    setLoading(bool: boolean) {
        this.isLoading = bool
    }

    async login(username: string, password: string) {
        this.setLoading(true)
        try {
            const res = await AuthService.login(username, password)
            setAccessToken(res.data.access)
            localStorage.setItem('auth', 'true')
            this.setAuth(true)
            this.setLoading(false)
        } catch (e: any) {
            console.log(e.message)
        }
    }

    async register(username: string, password: string, confirm_password: string) {
        this.setLoading(true)
        try {
            const res = await AuthService.register(username, password, confirm_password)
            setAccessToken(res.data.access)
            setRefreshToken(res.data.refresh)
            localStorage.setItem('auth', 'true')
            this.setAuth(true)
            this.setLoading(false)
        } catch (e: any) {
            console.log(e.message)
        }
    }

    async logout() {
        this.setLoading(true)
        try {
            removeAccessToken()
            removeRefreshToken()
            localStorage.removeItem('auth')
            this.setAuth(false)
            this.setLoading(false)
        } catch (e:any) {
            console.log(e.message)
        }
    }

    async checkAuth() {
        this.setLoading(true)
        try {
            const res = await axios.post<RefreshResponse>(`${API_URL}/me/refresh/`, { refresh: localStorage.getItem('refresh_token') })
            setAccessToken(res.data.access)
            localStorage.setItem('auth', 'true')
            this.setAuth(true)
        } catch (e: any) {
            console.log(e.message)
        } finally {
            this.setLoading(false)
        }
    }

}