import {IProduct} from "models/index";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ICartState {
    products: IProduct[],
    isLoading: boolean,
    error: string
}

const initialState: ICartState = {
    products: [],
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
        fetchingSuccess(state, action: PayloadAction<IProduct[]>) {
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
            state.products.push(action.payload)
        },
        fetchingRemoveFromCart(state, action: PayloadAction<IProduct>) {
            state.isLoading = false
            state.error = ''
            state.products.filter(id => id !== action.payload)
        }
    },
    // extraReducers: {
    //     [fetchAsyncCart.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
    //         state.isLoading = false;
    //         state.error = ''
    //         state.products = action.payload
    //     },
    //     [fetchAsyncCart.pending.type]: (state) => {
    //         state.isLoading = true;
    //     },
    //     [fetchAsyncCart.rejected.type]: (state, action: PayloadAction<string>) => {
    //         state.isLoading = false;
    //         state.error = action.payload
    //     },
    // }
})

export default cartsSlice.reducer