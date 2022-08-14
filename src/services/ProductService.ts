import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {IProduct, IProductData, IProductId, IProductsQuery} from "models";
import {API_URL} from "services/interseptors";


export const productApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['Products'],
    endpoints: (build) => ({
        getAllProducts: build.query<IProductData, IProductsQuery>({
            query: ({page_size, page = 1, colors_ids, category_ids, brands_ids, max_price, min_price, ordering}) => ({
                url: `products/`,
                params: {
                    page_size,
                    page,
                    brands_ids,
                    colors_ids,
                    category_ids,
                    max_price,
                    min_price,
                    ordering
                }
            }),
            providesTags: () => ['Products']
        }),
        getProduct: build.query<IProductId, number>({
            query: (id: number) => ({
                url: `products/${id}/`
            })
        }),
        createProduct: build.mutation<IProduct, number>({
            query: (id: number) => ({
                url: `product/`,
                method: 'POST',
                body: id
            }),
            invalidatesTags: ['Products']
        }),
    })
})

export const { useGetAllProductsQuery, useGetProductQuery } = productApi



