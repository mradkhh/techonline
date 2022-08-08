import {makeAutoObservable} from "mobx";

type Results = {
    id: number,
    name: string,
    icon: any
}

export interface IBrands {
    results: Results[]
}

export interface IProduct {
    id: number,
    name: string,
    price: string,
    discount: number,
    product_img: {
        image: string | undefined
    } | null,
    brand: number,
    category: number,
    is_stock: boolean,
    short_desc: string
}

export interface IProductData {
    results: IProduct[],
    count: number,
    next: string | null,
    previous: string | null
}

export interface IProductsQuery {
    page?: number,
    page_size?: number,
    min_price?: number | string,
    max_price?: number | string,
    brand?: number | string,
    category_search?: string,
    colors?: number | string,
    search?: string,
    ordering?: number | string
}

interface IUserLogin {
    username: string,
    password: string
}

 class FormError {
     set confirm_password_register(value: boolean) {
         this._confirm_password_register = value;
     }
     set password_register(value: boolean) {
         this._password_register = value;
     }
     set username_register(value: boolean) {
         this._username_register = value;
     }
     set password_login(value: boolean) {
         this._password_login = value;
     }
     set username_login(value: boolean) {
         this._username_login = value;
     }
     get confirm_password_register(): boolean {
         return this._confirm_password_register;
     }
     get password_register(): boolean {
         return this._password_register;
     }
     get username_register(): boolean {
         return this._username_register;
     }

     get password_login(): boolean {
         return this._password_login;
     }
     get username_login(): boolean {
         return this._username_login;
     }

    private _username_login: boolean = false;
    private _password_login: boolean = false;
    private _username_register: boolean = false;
    private _password_register: boolean = false;
    private _confirm_password_register: boolean = false


 }

export const formError = new FormError()

