import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_URL} from "services/interseptors";
import {IColors} from "models/index";


export const colorsApi = createApi({
    reducerPath: 'colorsApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints(builder)  {
        return {
            fetchColors: builder.query<IColors, any>({
                query: () => ({
                    url: 'colors/'
                })
            })
        }
    }
})

export const  { useFetchColorsQuery } = colorsApi