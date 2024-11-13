import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { buy_item } from '../../../redux/products/product'

function card(props) {
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
 nav('/login')
}

  let ee = useSelector(state =>state.product.Packet)
  console.log(ee.map(e=>e.name))

// dispatch(add_to_Packet(e.data))
  return (
    <div className='p-5'>
      <div>phone name : {props.phonename}</div>
    <div>color : {props.color}</div>
    <div> price : {props.price}</div>
    <div> left {props.instok}</div>
    {/* <button onClick={()=>{buyaction(props.id)}} className='bg-emerald-600' >buy one </button> */}
    <button onClick={()=>{add_to_Packet(props.id)}} className='bg-emerald-600' > add to Packet </button>
    </div>
    
    
  )
}

export default card