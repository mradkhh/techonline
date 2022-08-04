import {applyMiddleware, configureStore, createStore} from "@reduxjs/toolkit";
import {rootReducer} from "store/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {productApi} from "services/ProductService";


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => (
            getDefaultMiddleware().concat(productApi.middleware)
        )
    })
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))