import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate} from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import productsapi from '../../redux/products/productsapi';
import CardL from './card/Cardl';

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

    <div className='bg-neutral-900'>

< div className='container mx-auto  '>
  <div className='flex justify-around  bg-gray-800 text-white sticky'>
    <div className='p-10'>
      hello , {param.username}
    </div>

    <div>
      <button className='p-10' type='button' onClick={()=>{nav('/')}}>logout</button>
    </div>
  </div>



<div className='fixed right-0 p-1 text-white border rounded-full'>
  <Packet/>
</div>
    <div className='p-10 flex flex-wrap'>
  {data.map((e)=>{
    if(e.instok <= 0  ){
        
        return(
            <div key={e.id}  className='hidden'>
            <CardL
            name_of_user={param.username}
            id={e.id}
            key={e.name} 
            phonename={e.phonename}
            price={e.price} 
            color={e.color}
            instok={e.instok} 
            photo={e.photo} />
            </div>
        ) 
    }else{
return(

            <CardL
            name_of_user={param.username}
            id={e.id}
            key={e.name} 
            phonename={e.phonename}
            price={e.price} 
            color={e.color}
            instok={e.instok}
            photo={e.photo} />

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

export default Home_sginin