import {AppDispatch} from "store/index";
import {cartsSlice} from "store/reducers/cartSlice";
import $api, {API_URL} from "services/interseptors";
import {ICart, ICartResults, ICategories, ICategoriesResults, IProduct} from "models/index";
import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {getAccessToken} from "utils/tokenStorage";


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

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    tagTypes: ['Cart'],
    endpoints(builder)  {
        return {
            fetchCart: builder.query<ICartResults, string>({
                query: () => ({
                    url: 'carts/',
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    }
                }),
                providesTags: () => ['Cart']
            }),
            fetchAddToCart: builder.mutation<ICategories, { quantity: number, product: number }>({
                query: ({ quantity, product}) => ({
                    url: `carts/`,
                    method: 'POST',
                    body: {
                        quantity,
                        product
                    },
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    }
                }),
                invalidatesTags: ['Cart']
            }),
            fetchClearCart: builder.mutation<ICategories, string>({
                query: () => ({
                    url: `carts/clear_carts/`,
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    }
                }),
                invalidatesTags: ['Cart']
            }),
            fetchRemoveFromCart: builder.mutation<ICategories, number>({
                query: (id: number) => ({
                    url: `carts/${id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    }
                }),
                invalidatesTags: ['Cart']
            }),
        }
    }
})

export const { useFetchCartQuery, useFetchAddToCartMutation, useFetchRemoveFromCartMutation, useFetchClearCartMutation } = cartApi











