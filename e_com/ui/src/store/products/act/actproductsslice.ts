import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


type ttt ={
    id:number;
    name:string;
    brand:string;
    instok:number;
    photo:string;
}[]


const productapi = createAsyncThunk(
"peoductssslice/productapi",
async ()=>{
    return await axios.get<ttt>("http://localhost:3000/products").then(e=>e.data)
}
)


export default productapi;
