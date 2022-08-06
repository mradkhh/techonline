import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {IProduct, IProductData} from "models";
import {API_URL} from "services/interseptors";


export const productApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (build) => ({
        getAllProducts: build.query<IProductData, number>({
            query: (limit: number = 10) => ({
                url: `products/`,
                params: {
                    _limit: limit
                }
            })
        }),
        getProduct: build.query<IProduct, number>({
            query: (id: number) => ({
                url: `products/${id}`
            })
        })
    })
})



