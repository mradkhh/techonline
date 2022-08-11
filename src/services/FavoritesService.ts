import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {API_URL} from "services/interseptors";
import {ICartResults, ICategories} from "models/index";
import {getAccessToken} from "utils/tokenStorage";


export const favoritesApi = createApi({
    reducerPath: 'favoritesApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    tagTypes: ['Favorites'],
    endpoints(builder)  {
        return {
            fetchFavorites: builder.query<ICartResults, string>({
                query: () => ({
                    url: 'favorites/',
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    }
                }),
                providesTags: () => ['Favorites']
            }),
            fetchAddToFavorites: builder.mutation<ICategories, { quantity: number, product: number }>({
                query: ({ quantity, product}) => ({
                    url: `favorites/`,
                    method: 'POST',
                    body: {
                        quantity,
                        product
                    },
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    }
                }),
                invalidatesTags: ['Favorites']
            }),
            fetchClearFavorites: builder.mutation<ICategories, string>({
                query: () => ({
                    url: `favorites/clear_carts/`,
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    }
                }),
                invalidatesTags: ['Favorites']
            }),
            fetchRemoveFromFavorites: builder.mutation<ICategories, number>({
                query: (id: number) => ({
                    url: `favorites/${id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    }
                }),
                invalidatesTags: ['Favorites']
            }),
        }
    }
})


export const { useFetchAddToFavoritesMutation, useFetchClearFavoritesMutation, useFetchFavoritesQuery, useFetchRemoveFromFavoritesMutation  } = favoritesApi