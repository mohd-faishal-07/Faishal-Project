
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/lib/persistReducer';

const persistConfig ={
    key: 'persist-store',
    storage,
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

const sagaMiddleware = createSagaMiddleware();
const store  = configureStore({
    reducer:persistedReducer,
    middleware:()=>[sagaMiddleware]
});

export  const persistor = persistStore(store)
export default store;