import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { buy_item } from '../../../redux/products/product'

function CardL(props) {
  let nav = useNavigate()
  let dispatch = useDispatch()
  let data = useSelector(state =>state.product.data)
  let thiscard = data[props.id].instok
  thiscard = thiscard -1
  console.log(data)


let buyaction = (id)=>{
  props.name_of_user ? axios.patch(`http://localhost:3000/products/${id}`,{instok:`${thiscard}`}) : nav('/login')
}


let add_to_Packet =(id)=>{
  axios.get(`http://localhost:3000/products/${id}`).then(e=>dispatch(buy_item(e.data)))
}

  let ee = useSelector(state =>state.product.Packet)
  console.log(ee.map(e=>e.name))

// dispatch(add_to_Packet(e.data))
  return (
    <div className='outline outline-1 p-10 m-10 text-white rounded-3xl flex flex-col hover:scale-110 duration-300 hover:outline-blue-500 '>
    
    <div className='p-1 m-1'>phone name : {props.phonename}</div>
    <div className='p-1 m-1'>color : {props.color}</div>
    <div className='p-1 m-1'> price : {props.price}</div>
    <div className='p-1 m-1'> left {props.instok}</div>
        <div className='w-48 h-48'>
    <img src={props.photo} alt="" />
    </div>
    {/* <button onClick={()=>{buyaction(props.id)}} className='bg-emerald-600' >buy one </button> */}
    <div className='flex justify-center m-1'>
    <button onClick={()=>{add_to_Packet(props.id)}} className='bg-emerald-600 p-1 ps-5 pe-5 rounded-full hover:bg-emerald-400' > add to Packet </button>
    </div>
    </div>
    
    
    
  )
}

export default CardL