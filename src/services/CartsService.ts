import {AppDispatch} from "store/index";
import {cartsSlice} from "store/reducers/cartSlice";
import $api from "services/interseptors";
import {IProduct} from "models/index";
import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";


export const fetchCarts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(cartsSlice.actions.fetching())
        const res = await $api.get<IProduct[]>('carts/')
        dispatch(cartsSlice.actions.fetchingSuccess(res.data))
    } catch (e: any) {
        dispatch(cartsSlice.actions.fetchingError('Error while fetching cart'))
    }
}

export const fetchAddToCart = (quantity: number = 1, user: number = 2 , product: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(cartsSlice.actions.fetching())
        const res = await $api.post('carts/', { quantity, user, product })
        dispatch(cartsSlice.actions.fetchingSuccess(res.data))
    } catch (e: any) {
        dispatch(cartsSlice.actions.fetchingError('Error while fetching add to cart'))
    }
}


export const fetchRemoveFromToCart = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(cartsSlice.actions.fetching())
        const res = await $api.delete(`carts/${id}`)
        dispatch(cartsSlice.actions.fetchingSuccess(res.data))
    } catch (e: any) {
        dispatch(cartsSlice.actions.fetchingError('Error while fetching add to cart'))
    }
}

// export const fetchAsyncCart = createAsyncThunk(
//     'cart/fetchAllProducts',
//     async (_, thunkApi) => {
//         try {
//             const res = await $api.get<IProduct[]>('carts/')
//             return res.data
//         } catch (e: any) {
//             return thunkApi.rejectWithValue('Error while fetching')
//         }
//     }
// )











