import {makeAutoObservable} from "mobx";
import AuthService from "services/AuthService";
import axios from "axios";
import {AuthResponse, RefreshResponse} from "models/response/AuthResponse";
import {API_URL} from "services/interseptors";


export default class Store {
    isAuth = false
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
        try {
            const res = await AuthService.login(username, password)
            localStorage.setItem('access_token', res.data.access)
            localStorage.setItem('refresh_token', res.data.refresh)
            this.setAuth(true)
        } catch (e: any) {
            console.log(e.message)
        }
    }

    async register(username: string, password: string, confirm_password: string) {
        try {
            const res = await AuthService.register(username, password, confirm_password)
            localStorage.setItem('access_token', res.data.access)
            localStorage.setItem('refresh_token', res.data.refresh)
            this.setAuth(true)
        } catch (e: any) {
            console.log(e.message)
        }
    }

    async logout() {
        try {
            localStorage.removeItem('access_token')
            this.setAuth(false)
        } catch (e:any) {
            console.log(e.message)
        }
    }

    async checkAuth() {
        this.setLoading(true)
        try {
            const res = await axios.post<RefreshResponse>(`${API_URL}/me/refresh/`, { refresh: localStorage.getItem('refresh_token') })
            localStorage.setItem('access_token', res.data.access)
            this.setAuth(true)
        } catch (e: any) {
            console.log(e.message)
        } finally {
            this.setLoading(false)
        }
    }

}