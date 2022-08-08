import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {IProduct, IProductData, IProductsQuery} from "models";
import {API_URL} from "services/interseptors";


export const productApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['Products'],
    endpoints: (build) => ({
        getAllProducts: build.query<IProductData, IProductsQuery>({
            query: ({page_size = 10, page = 1, max_price, min_price, brand, category_search, search, colors, ordering}) => ({
                url: `products/`,
                params: {
                    page_size,
                    page,
                    max_price,
                    min_price,
                    brand,
                    category_search,
                    search,
                    colors,
                    ordering
                }
            }),
            providesTags: () => ['Products']
        }),
        getProduct: build.query<IProduct, number>({
            query: (id: number) => ({
                url: `products/${id}`
            })
        }),
        createProduct: build.mutation<IProduct, number>({
            query: (id: number) => ({
                url: `products/`,
                method: 'POST',
                body: id
            }),
            invalidatesTags: ['Products']
        }),
        updateProduct: build.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `products/${product.id}`,
                method: 'PUT',
                body: { product }
            }),
            invalidatesTags: ['Products']
        }),
        deleteProduct: build.mutation<IProduct, number>({
            query: (id: number) => ({
                url: `products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Products']
        }),
    })
})



