
"use client"


import ss from './Says_Customers.module.css'
import img from '../../_images/client-img.png'
import img1 from '../../_images/quote-icon.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight ,faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import { useState , useEffect} from "react";


function Says_Customers() {

    let[a,seta]= useState(1)
    let[b0,setb0]= useState()
    let[b1,setb1]= useState()
    let[b2,setb2]= useState()
    
    function ttt () {
        if(a===4){
            seta(1)
    }else{
        seta(a++)

    }

}
    function tttt () {
        if(a===0){
            seta(3)
        }else{
            seta(a--)

        }

    }
    useEffect(()=>{

        switch(a){
            case 1 :    
            setb0('visible')
            setb1('invisible')
            setb2('invisible')
            break;
            case 2 :
                setb0('invisible')
                setb1('visible')
                setb2('invisible')
            break;
            case 3 :
                setb0('invisible')
                setb1('invisible')
                setb2('visible')
            break;

        }

    },[a])




    return (
        <>
        <p className="flex text-5xl font-bold p-5 justify-center">
        Says Customers 
        </p>
        <div className='flex justify-center relative w-[100%] h-[1200px] md:h-[500px]'>
        <div className={`${b0}  absolute container mx-auto shadow-2xl  md:flex h-[1000px] md:h-[450px] w-[75%] lg:w-[85%] p-5 border-2`}>
            <Image className='min-w-[300px] w-[100%] md:w-[30%]' src={img}/>
            <div className='flex flex-col justify-around p-5'>
            <Image className='' src={img1}/>
            <p className=' text-lg lg:text-2xl font-semibold'>1111111111It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
            <p className='text-2xl font-bold'>Channery</p>
            </div>
        </div>




        <div className={`${b1} absolute container mx-auto shadow-2xl  md:flex h-[1000px] md:h-[450px] w-[75%] lg:w-[85%] p-5 border-2`}>
            <Image className='min-w-[300px] w-[100%] md:w-[30%]' src={img}/>
            <div className='flex flex-col justify-around p-5'>
            <Image className='' src={img1}/>
            <p className=' text-lg lg:text-2xl font-semibold'>2222222222222222It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
            <p className='text-2xl font-bold'>Channery</p>
            </div>
        </div>




        <div className={`${b2} absolute container mx-auto shadow-2xl  md:flex h-[1000px] md:h-[450px] w-[75%] lg:w-[85%] p-5 border-2`}>
            <Image className='min-w-[300px] w-[100%] md:w-[30%]' src={img}/>
            <div className='flex flex-col justify-around p-5'>
            <Image className='' src={img1}/>
            <p className=' text-lg lg:text-2xl font-semibold'>3333333333333It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
            <p className='text-2xl font-bold'>Channery</p>
            </div>
        </div>

        </div>
        <div className='  w-[200px] flex justify-center  container mx-auto '>
            <div className='  justify-between '>
            <button onClick={tttt}><FontAwesomeIcon className='p-5 m-5 bg-amber-500' icon={faChevronLeft} size="lg" style={{color: "#000000",}} /></button>
            <button onClick={ttt}><FontAwesomeIcon className='p-5 m-5 bg-amber-500' icon={faChevronRight} size="lg" style={{color: "#000000",}} /></button>
            </div>
        </div>
        </>




    );
}

export default Says_Customers;