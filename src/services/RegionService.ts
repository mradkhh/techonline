import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_URL} from "services/interseptors";
import { IRegionResults} from "models/index";


export const regionsApi = createApi({
    reducerPath: 'regionsApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints(builder)  {
        return {
            fetchRegions: builder.query<IRegionResults, string>({
                query: () => ({
                    url: 'regions/',
                })
            }),
            fetchRegionId: builder.query<IRegionResults, number>({
                query: (id) => ({
                    url: `regions/${id}`,
                })
            }),
        }
    }
})

export const  { useFetchRegionIdQuery, useFetchRegionsQuery } = regionsApi