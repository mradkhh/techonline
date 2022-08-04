import {combineReducers} from "@reduxjs/toolkit";
import {cartReducer} from "store/reducers/cartReducer";
import favoritesSliceReducer from "store/reducers/favoritesSlice";
import {productApi} from "services/ProductService";


export const rootReducer = combineReducers({
    cart: cartReducer,
    favoritesSliceReducer,
    [productApi.reducerPath]: productApi.reducer
})

export type RootState = ReturnType<typeof rootReducer>