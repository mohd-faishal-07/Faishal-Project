import { ADD_TO_CART, REMOVE_TO_CART } from "./constants";

const initialState = {
    cartData: [],
};

export const cartData = (state = initialState.cartData, action) => {
    console.log("Reducer action:", action);

    switch (action.type) {
        case ADD_TO_CART:
            console.log("Add to cart ", action);
            return [...state, action.data];

        case REMOVE_TO_CART:
            const remainingItems = state.filter((item) => item.id !== action.data);
            return [...remainingItems];

        default:
            return state;
    }
};
