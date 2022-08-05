import {combineReducers} from "@reduxjs/toolkit";
import {cartReducer} from "store/reducers/cartReducer";
import favoritesSliceReducer from "store/reducers/favoritesSlice";
import {productApi} from "services/ProductService";
import {brandsApi} from "services/BrandsService";


export const rootReducer = combineReducers({
    cart: cartReducer,
    favoritesSliceReducer,
    [productApi.reducerPath]: productApi.reducer,
    [brandsApi.reducerPath]: brandsApi.reducer
})

export type RootState = ReturnType<typeof rootReducer>