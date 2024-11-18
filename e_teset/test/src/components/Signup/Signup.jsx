import  { useState } from 'react'


import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function Signup() {
    let nav = useNavigate()


    let [id,setid] = useState(1)
    
    let isvaled = yup.object({
        fname: yup.string().required('enter firstname'),
        lname: yup.string().required('enter lastname'),
        username: yup.string().required('enter username'),
        // birth_date: yup.date().required('enter date'),
                                               age: yup.number().typeError('enter ages').min(18).required('enter ages'),
        gender: yup.string().required('choose gender'),
        password: yup.string().min(4).required('enter password'),
        confirm_password: yup.string().min(4).oneOf([yup.ref('password'),null],'password not matched'),
        
    })

    
    const getsub = ()=> {axios.get('http://localhost:3000/users')
        .then((respons)=>{
            let r =respons.data
            let aa = (r)=>{
                return r.username == getValues("username")
            }
            let reslut = r.filter(aa)
           return reslut
        // note  : need to show masg if username is in the bd.jason 
        })
} 

const sub = (values)=>{axios.post('http://localhost:3000/users',values).then(nav('/'))}
    
    const { register, handleSubmit , formState: { errors } , control ,getValues} = useForm({
        
    
        resolver: yupResolver(isvaled),
    })
    return (
        <>
                <div className='bg-neutral-900 w-auto h-screen flex justify-center items-center'>
                    <form onSubmit={handleSubmit(sub)} >
                        <div className='bg-black rounded-3xl p-10  h-auto flex flex-col justify-around items-center'>
                            <div className='text-3xl font-bold text-white'> SIGN UP </div>
                            <div className='flex p-2 gap-2 '>
                                <div className='flex flex-col text-white'>
                                <div {...register(`id`) } value={id}  name="id" id="id" />
                                <label className='p-2' htmlFor="fname"> frist name </label>
                                <input className='rounded-full ps-2  bg-black outline outline-2 outline-blue-500' {...register('fname')} type="text"  name='fname' id='fname' />
                                <p className='mt-2 text-red-700 ms-20'>{errors?.fname?.message}</p>
                                </div>

                                <div className='flex flex-col text-white'>
                                <label className='p-2' htmlFor="lname"> last name </label>
                                <input {...register('lname')} type="text"  name='lname' id='lname' className='rounded-full ps-2  bg-black outline outline-2 outline-blue-500'/>
                                <p className='mt-2 text-red-700 ms-20'>{errors?.lname?.message}</p>
                                </div>
                            </div>
                            <div className='flex flex-col w-[100%] p-2 text-white'>
                                <label className='p-2' htmlFor="username"> username </label>
                                <input {...register('username')} type="text"  name='username' id='username' className='rounded-full ps-2  bg-black outline outline-2 outline-blue-500'/>
                                <p className='mt-2 text-red-700 ms-20'>{errors?.username?.message}</p>
                            </div>
                            <div className='flex flex-col w-[100%] p-2 text-white'>
                                {/* <label htmlFor="">birth date</label>
                                <input {...register('birth_date')} type="date" name='birth_date ' id='birth_date' />
                                <p className='mt-2 '>{errors?.birth_date?.message}</p> */}
                                
                                <label className='p-2' htmlFor="age">age</label>
                                <input {...register('age')} type="number" name='age' id='age' className='rounded-full ps-2  bg-black outline outline-2 outline-blue-500' />
                                <p className='mt-2 text-red-700 ms-20'>{errors?.age?.message}</p>

                            </div>
                            <div className='flex flex-col w-[100%] p-2 text-white'>
                                <label className='p-2' htmlFor="password"> password </label>
                                <input {...register('password')} type="password"  name='password' id='password' className='rounded-full ps-2  bg-black outline outline-2 outline-blue-500' />
                                <p className='mt-2 text-red-700 ms-20'>{errors?.password?.message}</p>
                            </div>
                            <div className='flex flex-col w-[100%] p-2 text-white'>
                                <label className='p-2' htmlFor="confirm_password"> confirm password </label>
                                <input {...register('confirm_password')} type="password"  name='confirm_password' id='confirm_password' className='rounded-full ps-2  bg-black outline outline-2 outline-blue-500' />
                                <p className='mt-2 text-red-700 ms-20'>{errors?.confirm_password?.message}</p>

                            </div>
                            <div className='p-2  w-[100%] text-white'>
                                <label  htmlFor="gender">gender</label>
                            <div className='flex flex-col'>
                                <div className='p-1'>
                                    <input  {...register('gender')} type="radio" value='man'  name='gender' id='genderman' className=' ' />
                                    <label className='m-2' htmlFor="man">man</label>
                                </div>
                                <div className='p-1'>
                                    <input {...register('gender')} type="radio" value='woman'  name='gender' id='genderwoman' />
                                    <label className='m-2' htmlFor="woman">woman</label>
                                </div>
                                <p className='mt-2 text-red-700 ms-20'>{errors?.gender?.message}</p>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button className='border rounded-full p-1 ps-2 pe-2 outline outline-1 outline-lime-500 text-white bg-black hover:bg-slate-400' type='submit' onClick={()=>setid(id+1)}>Signup</button>
                            </div>
                        </div>
                    </form>
                    <DevTool control={control} />
            </div>
        </>
    )
}

export default Signup