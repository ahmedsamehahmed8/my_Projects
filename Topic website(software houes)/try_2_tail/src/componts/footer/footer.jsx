


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone,faCaretDown  } from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from 'react';









function Footer() {

let [display,setdisplay]=useState(-1)

let [visible,setvisible]=useState('')



useEffect(()=>{

    if(display===1){
        setvisible('visible')
    }else{
        setvisible('invisible')
    }

},[display])


    return (
<>
        <footer className='  overflow-hidden   relative'>
      <div className='container flex flex-wrap  w-[100%] justify-between p-10'>


      <div className='flex mt-14 min-w-[300px] '>
        <FontAwesomeIcon className='p-1' icon={faClone} rotation={90} size="2xl" style={{color: "#000000",}} />
        <p className='text-3xl font-bold'>
        Topic
        </p>
      </div>

      


      <div className='min-w-[300px] mt-14'>
        <p className='mb-8 text-3xl font-bold'>Resources</p>
        <p className='text-emerald-500 hover:text-emerald-900 cursor-pointer'>Home</p>
        <p className='text-emerald-500 hover:text-emerald-900 cursor-pointer'>How it works</p>
        <p className='text-emerald-500 hover:text-emerald-900 cursor-pointer'>FAQs</p>
        <p className='text-emerald-500 hover:text-emerald-900 cursor-pointer'>Contact</p>
      </div>


      <div className='min-w-[300px] mt-14'>
        <p className='mb-8 text-3xl font-bold'>Information</p>
        <p className='text-emerald-500 hover:text-emerald-900 cursor-pointer'>305-240-9671</p>
        <p className='text-emerald-500 hover:text-emerald-900 cursor-pointer'>info@company.com</p>
      </div>

      
      <div  className='w-[20%] min-w-[300px] mt-14 flex flex-col justify-between z-10'>
        <div>
        <button onClick={()=>{ setdisplay(-display)}} className='bg-emerald-300 mb-8 p-2 text-white relative rounded-lg'>
          English
          <FontAwesomeIcon icon={faCaretDown} style={{color: "#ffffff",}} />
          <div className={`${visible} absolute flex flex-col justify-center border-2 top-[43px] rounded-xl left-0 w-[100px] h-[100px] bg-white`}> 
            <button className='text-black w-[100%]'>Thai</button>
            <button className='text-black w-[100%]'>Myanmar</button>
            <button className='text-black w-[100%]'>Arabic</button>
          </div>
        </button> 
        </div>
      <p className='text-xl mb-8'>Copyright © 2048 Topic Listing Center. All rights reserved.</p>
      <p>Design: <span className='hover:cursor-pointer'> TemplateMo </span></p>
      
      </div>
      </div>

      <div className='absolute  -bottom-64 -right-64 '><FontAwesomeIcon className=' w-[600px] h-[600px] -rotate-45 text-emerald-300' icon={faCaretDown} />
</div>
    </footer>
      <div className=' w-[100%] bg-emerald-300 h-[20px] bottom-0'></div>


</>

    );
}

export default Footer;