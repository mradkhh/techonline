import {ICart, IProduct} from "models/index";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ICartState {
    products: ICart,
    isLoading: boolean,
    error: string
}

const initialState: ICartState = {
    products: {
        user: null,
        products: []
    },
    isLoading: false,
    error: ''
}

export const cartsSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        fetching(state) {
            state.isLoading = true
        },
        fetchingSuccess(state, action: PayloadAction<ICart>) {
            state.isLoading = false
            state.error = ''
            state.products = action.payload
        },
        fetchingError(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        fetchingAddToCartSuccess(state, action: PayloadAction<IProduct>) {
            state.isLoading = false
            state.error = ''
            state.products['products'].push(action.payload)
        },
        fetchingRemoveFromCart(state, action: PayloadAction<IProduct>) {
            state.isLoading = false
            state.error = ''
            state.products['products'].filter(id => id !== action.payload)
        },
        fetchClearCart(state, action: PayloadAction<ICart>) {
            state.isLoading = false
            state.error = ''
            state.products = action.payload
        }
    }
})

export default cartsSlice.reducer