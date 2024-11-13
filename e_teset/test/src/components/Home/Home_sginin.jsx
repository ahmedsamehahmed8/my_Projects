import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate} from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import productsapi from '../../redux/products/productsapi';

import Card from './card/card';
import Packet from './Packet/Packet';


function Home_sginin() {

      let dispatch = useDispatch()
  useEffect(
    ()=>{
      console.log(dispatch(productsapi()))
    }
    ,[])
      let data = useSelector(state =>state.product.data)

    let nav = useNavigate()
    let param =useParams()
    console.log(param.username)
  return (
<>
<div className='flex justify-end'>
<Packet/>
</div>
    <div className='p-10'>{param.username}</div>

    <div className='p-10'>
  {data.map((e)=>{
    if(e.instok <= 0  ){
        
        return(
            <div key={e.id}  className='hidden'>
            <Card
            name_of_user={param.username}
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
            name_of_user={param.username}
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


    <button className='p-10' type='button' onClick={()=>{nav('/')}}>logout</button>

</>
  )
}

export default Home_sginin