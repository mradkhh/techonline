import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_URL} from "services/interseptors";
import {ICategories, ICategoriesResults} from "models/index";


export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints(builder)  {
        return {
            fetchAllCategories: builder.query<ICategoriesResults, any>({
                query: () => ({
                    url: 'categories/'
                })
            }),
            fetchCategoryById: builder.query<ICategories, number>({
                query: (id: number) => ({
                    url: `categories/${id}`
                })
            }),
        }
    }
})

export const  { useFetchAllCategoriesQuery } = categoriesApi
export const  { useFetchCategoryByIdQuery } = categoriesApi