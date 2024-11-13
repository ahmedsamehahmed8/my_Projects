import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";





let productsapi = createAsyncThunk('product/productsapi',async ()=>{
    return await axios.get("http://localhost:3000/products").then(e=>e.data)
})



export default productsapi

