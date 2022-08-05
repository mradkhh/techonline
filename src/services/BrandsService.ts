import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_URL} from "services/interseptors";
import {IBrands} from "models/index";


 export const brandsApi = createApi({
    reducerPath: 'brandsApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (build) => ({
        getAllBrands: build.query<IBrands[], undefined>({
            query: () => ({
                url: 'brands/'
            })
        })
    })
})

export const fetchBrands = brandsApi.useGetAllBrandsQuery