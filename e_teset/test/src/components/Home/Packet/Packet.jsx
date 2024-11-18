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
    let [cont_items,setcont_items] = useState(1)

    // let new_item = ()=> setcont_items(aa.length)
    console.log(cont_items)


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

    // let on_delete = (aa)=>{


    // }







let [show,setshow]=useState(-1)
let [e , sete ] = useState("hidden")
useEffect(
    ()=>{
        show === 1 ? sete('') : sete('hidden')
    },[show])
// 
  return (
    <>
    <button onClick={()=>setshow( -1 * show)}>Packet {aa.length}</button>
    <div className={`${e} w-64 h-64 bg-neutral-700 opacity-30 mt-5 right-0  overflow-auto  absolute`}>

{
    aa.map((e)=>{
        return( <div key={cont_items} className='borde p-3 flex justify-between'>
    {/* {new_item } */}
        <div>
            {cont_items}
        {e.name }
        </div>
        <div><button>delete</button></div>
    </div>)
    })
}

    <div className='flex justify-center items-center '>
        <div className=' border p-2 rounded-full'>
        <button onClick={()=>on_buy(aa)}>buy items</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Packet