import {combineReducers} from "@reduxjs/toolkit";
import favoritesSliceReducer from "store/reducers/favoritesSlice";
import cartsSliceReducer from "store/reducers/cartSlice";
import {productApi} from "services/ProductService";
import {brandsApi} from "services/BrandsService";
import {categoriesApi} from "services/CategoriesService";
import {cartApi} from "services/CartsService";


export const rootReducer = combineReducers({
    carts: cartsSliceReducer,
    favorites: favoritesSliceReducer,
    [productApi.reducerPath]: productApi.reducer,
    [brandsApi.reducerPath]: brandsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer
})

export type RootState = ReturnType<typeof rootReducer>