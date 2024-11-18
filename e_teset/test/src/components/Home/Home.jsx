import axios from 'axios';
import Card from './card/card';
import { useSelector , useDispatch } from 'react-redux';
import React, { useState ,useEffect } from 'react'
import { useNavigate} from "react-router-dom";
import store from '../../redux/store/store';
import productsapi from '../../redux/products/productsapi';

function Home() {
  let dispatch = useDispatch()
  useEffect(
    ()=>{
      console.log(dispatch(productsapi()))
    }
    ,[])
      let data = useSelector(state =>state.product.data)
  
  let nave = useNavigate()



  return (
    <div className=' bg-neutral-900  h-auto w-auto '>

< div className=' container mx-auto '>
<div className=' p-5   text-white flex justify-around bg-gray-800'>
  <button className='' type='button' onClick={()=> nave('/login')} >login</button>
  <button type='button' onClick={()=> nave('/signup')} >signup</button>
</div>

  <div className='p-10 flex flex-wrap'>
    {data.map((e)=>{
      if(e.instok <= 0  ){
        return(
        <div key={e.id}  className='hidden'>
          <Card
          id={e.id}
          key={e.name} 
          phonename={e.phonename}
          price={e.price} 
          color={e.color}
          instok={e.instok}
          photo = {e.photo}/>
        </div>
        )
      }else{
        return(
        <Card
        id={e.id}
        key={e.name} 
        phonename={e.phonename}
        price={e.price} 
        color={e.color}
        instok={e.instok}
        photo = {e.photo} />
      )
    }
  }
  )
  }
  </div>
  </div>
    </div>
  )
}

export default Home