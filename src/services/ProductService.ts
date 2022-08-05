import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { IProduct } from "models";
import {API_URL} from "services/interseptors";


export const productApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (build) => ({
        getAllProducts: build.query<IProduct[], number>({
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



