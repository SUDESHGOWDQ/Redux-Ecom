import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cart:[],
}




const ProductSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        addProduct:(state,action)=>{state.cart.push(action.payload)},
        removeProduct(state,action){
            state.cart.filter(item => item.id !== action.payload)
        }
    },

})


export const {addProduct,removeProduct} = ProductSlice.actions
export default ProductSlice.reducer