import {AppDispatch} from "store/index";
import {cartsSlice} from "store/reducers/cartSlice";
import $api from "services/interseptors";
import {ICart, ICartResults, IProduct} from "models/index";


export const fetchCarts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(cartsSlice.actions.fetching())
        const res = await $api.get<ICartResults>('carts/')
        dispatch(cartsSlice.actions.fetchingSuccess(res.data.results))
    } catch (e: any) {
        dispatch(cartsSlice.actions.fetchingError('Error while fetching cart'))
    }
}

export const fetchAddToCart = (product: number, quantity: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(cartsSlice.actions.fetching())
        const res = await $api.post('carts/', { product, quantity })
        dispatch(cartsSlice.actions.fetchingAddToCartSuccess(res.data.results))
    } catch (e: any) {
        dispatch(cartsSlice.actions.fetchingError('Error while fetching add to cart'))
    }
}


export const fetchRemoveFromToCart = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(cartsSlice.actions.fetching())
        const res = await $api.delete(`carts/${id}`)
        dispatch(cartsSlice.actions.fetchingRemoveFromCart(res.data.results))
    } catch (e: any) {
        dispatch(cartsSlice.actions.fetchingError('Error while fetching add to cart'))
    }
}

export const clearCart = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(cartsSlice.actions.fetching())
        const res = await $api.delete<ICartResults>(`carts/`)
        dispatch(cartsSlice.actions.fetchClearCart(res.data.results))
    } catch (e: any) {
        console.log(e.message)
    }
}











