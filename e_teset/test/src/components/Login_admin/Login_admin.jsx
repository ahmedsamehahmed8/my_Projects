import React from 'react'
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools";
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { Link, useNavigate, useParams} from "react-router-dom";

function Login_admin() {

        let isvaled = yup.object({
        username: yup.string().required('ss'),
        password: yup.string().required('ss')
    })

    let nave = useNavigate()

    const sub = async  ()=> {
        let usernamee = getValues('username')
        let passwordd = getValues('password')

        axios.get(`http://localhost:3000/admin?username=${usernamee}&passwoed=${passwordd}`)
        .then((respons)=>{
            let r = respons.data[0] 
                r.username == usernamee && r.password == passwordd ?  nave(`/admin/${usernamee}`) : null
            })
            .catch((error)=>{
                console.log(error)
            })
    }






     const { register, handleSubmit , formState: { errors } , control, getValues} = useForm( {resolver: yupResolver(isvaled)})
    return (
        <>
            <div className='bg-neutral-900 w-auto h-screen flex justify-center items-center'>
                <form onSubmit={handleSubmit(sub)} className='bg-black rounded-3xl p-10 w-[400px]  '>
                    <h2 className='flex justify-center m-3 text-4xl text-white font-bold'>LOGIN</h2>
                    <div className='flex flex-col text-white'>
                        <label className='m-2  text-xl' htmlFor="username" > username </label>
                        <input {...register('username')} type="text"  name='username' id='username' className='rounded-full ps-2 outline outline-2 outline-blue-500 bg-black'/>
                      <p className='text-xl text-red-700'>{errors?.username?.message }</p>
                    </div>
                    <div className='flex flex-col text-white'>
                        <label className='m-2   text-lg' htmlFor="password"> password </label>
                        <input {...register('password')} type="password"  name='password' id='password' className='rounded-full ps-2 outline outline-2 outline-blue-500 bg-black'/>
                        <p className='text-xl text-red-700'>{errors?.username?.message }</p>
                    </div>
                    <div className='flex justify-center'>
                    <button className=' outline outline-1 outline-lime-500 text-white m-3 p-2 ps-5 pe-5 rounded-full font-bold hover:bg-slate-400 ' type='submit' >login</button>
                    </div>
                </form>
                <DevTool control={control} />
            </div>
        </>
    )
}

export default Login_admin