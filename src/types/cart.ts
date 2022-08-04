import {IProduct} from "models/IProduct";

export interface ICartState {
    products: IProduct[],
    page: number,
    error: null | string,
    limit: number,
    isLoading: boolean
}

export enum CartActionTypes {
    FETCH_CART = 'FETCH_CART',
    FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS',
    FETCH_CART_ERROR = 'FETCH_CART_ERROR',
}

interface FetchCartAction {
    type: CartActionTypes.FETCH_CART
}

interface FetchCartSuccessAction {
    type: CartActionTypes.FETCH_CART_SUCCESS,
    payload: IProduct[]
}

interface FetchCartErrorAction {
    type: CartActionTypes.FETCH_CART_ERROR,
    payload: string
}

export type ICartAction = FetchCartAction | FetchCartSuccessAction | FetchCartErrorAction