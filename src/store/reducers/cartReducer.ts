import {CartActionTypes, ICartAction, ICartState} from "types/cart";

const initialState: ICartState = {
    products: [
        {
        "id": 1,
        "name": "product1",
        "short_desc": "product1",
        "price": "11.00",
        "discount": 0,
        "product_img": null,
        "brand": 1,
        "category": 1,
        "is_stock": false
    }
    ],
    page: 1,
    error: null,
    limit: 10,
    isLoading: false
}

export const cartReducer = (state = initialState, action: ICartAction): ICartState => {
    switch (action.type) {
        case CartActionTypes.FETCH_CART:
            return { ...state, isLoading: true }
        case CartActionTypes.FETCH_CART_SUCCESS:
            return { ...state, isLoading: false, products: action.payload }
        case CartActionTypes.FETCH_CART_ERROR:
            return { ...state, isLoading: false, error: action.payload }
        default:
            return state
    }
}

