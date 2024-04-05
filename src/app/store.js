import {configureStore} from '@reduxjs/toolkit'
import ProductReducer from './ProductSlice'
import DataReducer from './DataSlice'


 export const store = configureStore({
    reducer:{
        Product:ProductReducer,
        Data:DataReducer
    }
})