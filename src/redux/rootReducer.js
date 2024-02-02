import {combineReducers} from 'redux'
import { cartData, increment } from './reducer'

export default combineReducers({
    cartData,
    increment,
})