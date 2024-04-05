import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    data:[]
}



export const getAllProducts = createAsyncThunk('product/getProducts',async()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
})

const DataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{state.data = state.data.concat(action.payload) })
    }

})

export default DataSlice.reducer