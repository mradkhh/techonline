import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "models/IProduct";

interface IFavoritesState {
    favorites: IProduct[],
    isLoading: boolean,
    error: string
}

const initialState: IFavoritesState = {
    favorites: [],
    isLoading: false,
    error: ''
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        favoritesFetching(state) {
            state.isLoading = true
        },
        favoritesFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
            state.isLoading = false;
            state.error = '';
            state.favorites = action.payload
        },
        favoritesFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
    extraReducers: {

    }
})

export default favoritesSlice.reducer