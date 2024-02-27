import { ADD_TO_CART, REMOVE_CART_COUNT, REMOVE_FROM_CART, UPDATE_CART_COUNT } from "./constant"

export const addToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: ADD_TO_CART,
        data: data, 
        payload: data
    }
}

export const removeToCart = (data) => {
    console.warn("action removeToCart", data)
    return {
        type: REMOVE_FROM_CART,
        data: data,
        payload: data
    }
}

export const updateCartCount = (payload) => {
    return {
        type: UPDATE_CART_COUNT,
        payload: payload,
    };
};

export const removeCartCount = (payload) => {
    return {
      type: REMOVE_CART_COUNT,
      payload: payload
    };
};