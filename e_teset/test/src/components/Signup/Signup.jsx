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
                <div className='bg-slate-500 w-auto h-screen flex justify-center items-center'>
                    <form onSubmit={handleSubmit(sub)} >
                        <div className='border h-96  w-screen flex flex-col justify-around items-center'>
                            <div className='flex p-2 gap-2 '>
                                <div className=''>
                                <div {...register(`id`) } value={id}  name="id" id="id" />
                                <label htmlFor="fname"> frist name </label>
                                <input className='' {...register('fname')} type="text"  name='fname' id='fname' />
                                <p className='mt-2 text-red-700 ms-20'>{errors?.fname?.message}</p>
                                </div>

                                <div>
                                <label htmlFor="lname"> last name </label>
                                <input {...register('lname')} type="text"  name='lname' id='lname' />
                                <p className='mt-2 text-red-700 ms-20'>{errors?.lname?.message}</p>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="username"> username </label>
                                <input {...register('username')} type="text"  name='username' id='username' />
                                <p className='mt-2 text-red-700 ms-20'>{errors?.username?.message}</p>
                            </div>
                            <div>
                                {/* <label htmlFor="">birth date</label>
                                <input {...register('birth_date')} type="date" name='birth_date ' id='birth_date' />
                                <p className='mt-2 '>{errors?.birth_date?.message}</p> */}
                                
                                <label htmlFor="age">age</label>
                                <input {...register('age')} type="number" name='age' id='age' />
                                <p className='mt-2 text-red-700 ms-20'>{errors?.age?.message}</p>

                            </div>
                            <div>
                                <label htmlFor="password"> password </label>
                                <input {...register('password')} type="password"  name='password' id='password' />
                                <p className='mt-2 text-red-700 ms-20'>{errors?.password?.message}</p>
                            </div>
                            <div>
                                <label htmlFor="confirm_password"> confirm password </label>
                                <input {...register('confirm_password')} type="password"  name='confirm_password' id='confirm_password' />
                                <p className='mt-2 text-red-700 ms-20'>{errors?.confirm_password?.message}</p>

                            </div>
                            <div>
                                <label  htmlFor="gender">gender</label>
                                
                                <input  {...register('gender')} type="radio" value='man'  name='gender' id='genderman' />
                                <label className='me-2' htmlFor="man">man</label>
                                
                                <input {...register('gender')} type="radio" value='woman'  name='gender' id='genderwoman' />
                                <label htmlFor="woman">woman</label>
                                <p className='mt-2 text-red-700 ms-20'>{errors?.gender?.message}</p>
                                </div>
                            <div className='flex justify-center'>
                                <button type='submit' onClick={()=>setid(id+1)}  >Signup</button>
                            </div>
                        </div>
                    </form>
                    <DevTool control={control} />
            </div>
        </>
    )
}

export default Signup