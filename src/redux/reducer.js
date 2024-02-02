import { ADD_TO_CART, REMOVE_CART_COUNT, REMOVE_FROM_CART, UPDATE_CART_COUNT } from "./constant";

const initialState = {
};

export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("ADD_TO_CART condition ", action)
            return [action.data, ...data];
        case REMOVE_FROM_CART:
            console.warn("REMOVE_FROM_CART condition ", action);
            const remainingItems = data.filter((item) => item.id !== action.data.id);
            return [...remainingItems];
            
        default:
            return data;
    }
};



export const increment = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CART_COUNT:
            return {
                ...state,
                cartCounts: action.payload,
            };
        case REMOVE_CART_COUNT:
            const updatedCounts = { ...state.cartCounts };
            delete updatedCounts[action.itemId];
            return {
                ...state,
                cartCounts: updatedCounts,
            };
        default:
            return state;
    }
};

export default cartData;
