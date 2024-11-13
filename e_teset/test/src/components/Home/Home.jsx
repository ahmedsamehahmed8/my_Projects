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
<>
<div className='w-screen h-5'>
  <button className='p-5' type='button' onClick={()=> nave('/login')} >login</button>
  <button type='button' onClick={()=> nave('/signup')} >signup</button>
</div>

  <div className='p-10'>
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
          instok={e.instok} />
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
        instok={e.instok} />
      )
    }
  }
  )
  }
  </div>
  </>
  )
}

export default Home