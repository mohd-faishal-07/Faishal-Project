import { ADD_TO_CART, REMOVE_TO_CART } from "./constants"


export const cartData = (data = [], action)=>{
    
    switch(action.type){
        case ADD_TO_CART:
            console.log("Add to cart ",action);
            return [action.data, ...data]
        
        case REMOVE_TO_CART:
            data.length= data.length? data.length-1:[]
                return [...data]

        default:
            return []
    }
}