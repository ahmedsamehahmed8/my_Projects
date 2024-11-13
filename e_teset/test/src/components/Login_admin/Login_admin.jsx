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
            <div className='bg-slate-500 w-auto h-screen flex justify-center items-center'>
                <form onSubmit={handleSubmit(sub)} className='border  w-60 '>
                    <div>
                        <label htmlFor="username"> username </label>
                        <input {...register('username')} type="text"  name='username' id='username' />
                      <p className='text-2xl'>{errors?.username?.message }</p>
                    </div>
                    <div>
                        <label htmlFor="password"> password </label>
                        <input {...register('password')} type="password"  name='password' id='password' />
                        <p>{errors?.username?.message }</p>
                    </div>
                    <div className='flex justify-center'>
                    <button type='submit' >login</button>
                    </div>
                </form>
                <DevTool control={control} />
            </div>
        </>
    )
}

export default Login_admin