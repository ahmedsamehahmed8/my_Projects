import axios from 'axios'
import React from 'react'

function Card_admin(props) {
  
  let ddelete = async (id)=>{
    await axios.delete(`http://localhost:3000/products/${id  }`)
    window.location.reload()
  }

  return (
    <>
    <div className='outline outline-1 p-10 m-10 text-white rounded-3xl flex flex-col hover:scale-110 duration-300 hover:outline-blue-500 '>

    <div className='p-1 m-1'>id: {props.id}</div>
    <div className='p-1 m-1'>name : {props.name}</div>
    <div className='p-1 m-1'>phonename : {props.phonename}</div>
    <div className='p-1 m-1'>color : {props.color}</div>
    <div className='p-1 m-1'>price :{props.price}</div>
    <div className='p-1 m-1'>instok : {props.instok}</div>
        <div className='w-48 h-48'>
    <img src={props.photo} alt="" />
    </div>
    <div className='justify-center flex p-2'>
      <button className='rounded-full w-[50%] bg-red-700 text-red-50 hover:bg-red-800' type='button' onClick={ ()=>{ddelete(props.id)}}> delete </button>
    </div>
    </div>
    </>
  )
}

export default Card_admin