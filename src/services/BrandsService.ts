import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_URL} from "services/interseptors";
import {IBrands} from "models/index";


 export const brandsApi = createApi({
    reducerPath: 'brandsApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints(builder)  {
        return {
            fetchAllBrands: builder.query<IBrands, any>({
                query: () => ({
                    url: 'brandes/'
                })
            }),
            fetchBrandsByCategoryId: builder.mutation<IBrands, number>({
                query: (id: number) => ({
                    url: 'brandes/',
                    params: {
                        categorySearch: id
                    }
                })
            })
        }
    }
})

export const  { useFetchAllBrandsQuery } = brandsApi