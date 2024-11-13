import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'

import { reset_packet } from '../../../redux/products/product'
import productsapi from '../../../redux/products/productsapi'

function Packet() {
    let dispatch= useDispatch()
    let aa = useSelector(state => state.product.Packet)
    // let zz = useSelector(state => state.product.data)
    let [cont,setcount] = useState(1)
    let on_buy =(aa)=>{

        for(let i = 0 ;i<=aa.length ;i++){
            if(aa[i]?.id === aa[i+1]?.id){
                setcount(cont = cont + 1 )
                dispatch(reset_packet())
            }else{ 
                axios.patch(`http://localhost:3000/products/${aa[i].id}`,{instok:`${aa[i].instok - cont}`})
                setcount(1)
                dispatch(reset_packet())
                dispatch(productsapi())
            }
            // بيطلع ايرور لما 2 ايتم + 2ايتم
        }
            
            // axios.patch(`http://localhost:3000/products/${aa[i].id}`,{instok:`${aa[i].instok -1}`})
        
            // dispatch(productsapi())
            // dispatch(reset_packet())

        // aa.map(e=>
        //     axios.patch(`http://localhost:3000/products/${e.id}`,{instok:`${e.instok -1}`}) 
        // )
    // dispatch(reset_packet())
    window.location.reload();
    }







let [show,setshow]=useState(1)
let [e , sete ] = useState("hidden")
useEffect(
    ()=>{
        show===1 ? sete('') : sete('hidden')
    },[show])
// 
  return (
    <>
    <button onClick={()=>setshow( -1 * show)}>Packet</button>
    <div className={`${e} w-64 h-64 bg-slate-500 mt-10 absolute`}>
        {aa.map(e=>e.name)}
    <div className='w-[100%] border  h-[90%] flex justify-center items-end'>
        <button onClick={()=>on_buy(aa)}>buy items</button>
    </div>
    </div>
    </>
  )
}

export default Packet