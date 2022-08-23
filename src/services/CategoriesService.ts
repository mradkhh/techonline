import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import $api, {API_URL} from "services/interseptors";
import {ICartResults, ICategories, ICategoriesResults} from "models/index";
import {AppDispatch} from "store/index";
import {cartsSlice} from "store/reducers/cartSlice";


export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints(builder)  {
        return {
            fetchAllCategories: builder.query<ICategoriesResults, any>({
                query: () => ({
                    url: 'categories/list_with_products/?ordering=-name'
                })
            }),
            fetchCategories: builder.query<ICategoriesResults, any>({
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

export const  { useFetchAllCategoriesQuery,useFetchCategoryByIdQuery, useFetchCategoriesQuery } = categoriesApi
