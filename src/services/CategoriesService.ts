import {API_URL} from "services/interseptors";
import { ICategoriesResults} from "models/index";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints(builder) {
        return {
            fetchCategories: builder.query<ICategoriesResults, any>({
                query: (page_size = 6) => ({
                    url: 'categories/',
                    params: {
                        page_size: page_size
                    }
                })
            })
        }
    }
})

export const { useFetchCategoriesQuery } = categoriesApi