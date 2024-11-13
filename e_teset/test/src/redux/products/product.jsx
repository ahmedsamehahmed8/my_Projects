import { createSlice } from "@reduxjs/toolkit";
import productsapi from "./productsapi";

let initialState ={
    loding: false ,
    data:[],
    error:null,
    Packet:[]
}



let product = createSlice({
    name:"product",
    initialState,
    reducers:{
        buy_item :(state,action)=>{state.Packet.push(action.payload)},
        reset_packet :(state)=>{state.Packet.shift()}
    },
    extraReducers:(builder)=>{
    builder.addCase(productsapi.pending,(state)=>{
        state.loding = true 
        state.data =[]
    }),
    builder.addCase(productsapi.fulfilled,(state ,action)=>{
        state.loding = false 
        state.data = action.payload
    }),
    builder.addCase(productsapi.rejected,(state ,action)=>{
        state.loding = false 
        state.data = []
        state.error = action.payload
    })
    }
})



export default product.reducer
export const {buy_item,reset_packet} =product.actions

