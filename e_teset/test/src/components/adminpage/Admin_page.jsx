import React, { useEffect, useState } from 'react'
import Card_admin from './card_admin'

import { useSelector, useDispatch } from 'react-redux'
import productsapi from '../../redux/products/productsapi'
import { useForm } from "react-hook-form"
import axios from 'axios'


import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom'

function Admin_page() {


  let dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(productsapi())        
    },[dispatch])

    let aaa = useSelector(state => state.product.data)



let isvaled = yup.object({
  name : yup.string().required("enter name"),
  phonename : yup.string().required("enter phonename"),
  color : yup.string().required(" enter color"),
  price : yup.number().required("enter price"),
  instok : yup.string().required("enter instok")

})




    const { register, handleSubmit , formState: { errors } , control ,getValues,setValue} = useForm({
        
      defaultValues:{
        id:aaa.length
      },
        resolver: yupResolver(isvaled),
    })
    let lastary = aaa[aaa.length -1]?.id

    let new_id = Number(lastary) +1

    console.log(lastary)

    setValue('id', `${new_id}`, { shouldTouch: true })

    let onsub = (values)=>{axios.post("http://localhost:3000/products",values)
      window.location.reload()
    
    //      let photob  = getValues("photo")


    //   const getBase64StringFromDataURL = (dataURL) =>
    // {dataURL.replace('data:', '').replace(/^.+,/, '');}


    //   setValue("photo", `${getBase64StringFromDataURL(photob)}`)
    
    }


       let param = useParams()
       console.log(param.username)
      let nave =  useNavigate()


      let [visible,set_visible] = useState("invisible")







  return (
    <div className='bg-neutral-900'>

    <div className='container mx-auto'>

    <div className='flex justify-around  bg-gray-800 text-white sticky'>
      <div className='p-10'>
      <div>hi , {param.username}</div>
      </div>
      <div>
        <button className='p-10' onClick={()=>{nave('/admin')}}>log out</button>
      </div>
    </div>



<div className='flex flex-wrap '>

      {
        
      aaa.length === 0 ? null :
      aaa.map((e) => {
        return (
          <div key={e.id} >
          <Card_admin
            key={e.id}
            id={e.id}
            name={e.name}
            phonename={e.phonename}
            color={e.color}
            price={e.price}
            instok={e.instok}
            photo={e.photo}
            />
            </div>
        )
      })}

        </div>
      

      <div>
        <div className=' text-white  flex justify-center p-10'>
          <button onClick={()=>set_visible("visible")} className='bg-green-800 rounded-full p-1 ps-2 pe-2  hover:bg-green-500 font-bold' >add new item</button> 
        </div>

        <div className={` ${visible} h-screen w-screen bg-slate-700 fixed top-0 left-0 flex justify-center items-center  bg-opacity-90`}>
          <div>
            <form className='' onSubmit={handleSubmit(onsub)}>
        <div className='flex justify-center  '>

        <div className='bg-black border relative w-[500px] rounded-3xl justify-center items-center flex flex-col'>
              <div className='absolute top-2 right-4 text-white text-4xl'>
                <button onClick={()=>set_visible("invisible")}>x</button>
              </div>
        <div  className='p-2 flex flex-col text-white'>
        <label className=' '  htmlFor="id">id </label>
        <input {...register('id')} type="number" readOnly name="id" value={new_id}  id="id"  className='rounded-full ps-2  bg-black outline outline-2 outline-blue-500'/>
        </div>

        <div className='p-2 flex flex-col text-white'>
        <label className=' ' htmlFor="name"> name </label>
        <input {...register('name')} type="text" name="name" id="name" className='rounded-full ps-2  bg-black outline outline-2 outline-blue-500'/>
        </div>
           <p className='mt-2 text-red-700 '>{errors?.name?.message}</p>

        <div className='p-2 flex flex-col text-white'>
        <label className='' htmlFor="phonename">phone name</label>
        <input {...register('phonename')} type="text" name="phonename" id="phonename" className='rounded-full ps-2  bg-black outline outline-2 outline-blue-500'/>
        </div>
           <p className='mt-2 text-red-700 '>{errors?.phonename?.message}</p>


        <div className='p-2 flex flex-col text-white'>
        <label className='me-' htmlFor="color">color</label>
        <input {...register('color')} type="text" name="color" id="color" className='rounded-full ps-2  bg-black outline outline-2 outline-blue-500'/>
        </div>
           <p className='mt-2 text-red-700 '>{errors?.color?.message}</p>


        <div className='p-2 flex flex-col text-white'>
        <label  htmlFor="price">price</label>
        <input {...register('price')} type="number" name="price" id="price" className='rounded-full ps-2  bg-black outline outline-2 outline-blue-500'/>
        </div>
           <p className='mt-2 text-red-700 '>{errors?.price?.message}</p>
      

        <div className='p-2 flex flex-col text-white'>
        <label htmlFor="instok">instok</label>
        <input {...register('instok')} type="number" name="instok" id="instok" className='rounded-full ps-2  bg-black outline outline-2 outline-blue-500'/>
        </div>
           <p className='mt-2 text-red-700 '>{errors?.instok?.message}</p>

           <div className='p-2 flex flex-col text-white'> 
            <label htmlFor="photo">photo</label>  
            <input {...register("photo")} type="file" name="photo" id="photo" />
           </div>

      <div className=' p-5 flex justify-center items-center'>
        <button className='p-2 ps-5 pe-5 rounded-full bg-green-600 text-white hover:bg-green-500' type='submit'>add</button>
      </div>
        </div>
      
        </div>
      </form>
          </div>
        </div>

      
      </div>
        <DevTool control={control}/>
    </div>
    </div>
  )
}

export default Admin_page