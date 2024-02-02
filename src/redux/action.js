import { ADD_TO_CART, REMOVE_CART_COUNT, REMOVE_FROM_CART, UPDATE_CART_COUNT } from "./constant"

export const addToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) => {
    console.warn("action removeToCart", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const updateCartCount = (counts) => {
    return {
        type: UPDATE_CART_COUNT,
        payload: counts,
    };
};

export const removeCartCount = (itemId) => {
    return {
      type: REMOVE_CART_COUNT,
      itemId,
    };
};