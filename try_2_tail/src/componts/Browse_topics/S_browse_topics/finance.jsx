




import f_cardimg1 from '../../../images/topics/undraw_Finance_re_gnv2.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faBookmark} from '@fortawesome/free-regular-svg-icons'

import { faTwitter,faFacebook,faPinterest  } from '@fortawesome/free-brands-svg-icons'






import { Link } from 'react-router-dom'












function Finance (props) {
    return ( 


        <div className={`Finance ${props.className}  `}>
    <div className="flex flex-wrap justify-center gap-7">


<div className="relative p-5 shadow-2xl h-[500px] lg:h-[350px] min-w-[365px]  lg:w-[40%] rounded-3xl   flex flex-col justify-between hover:-translate-y-2 duration-1000 cursor-pointer">
                    
                    <Link to={'/aa'} className=" p-5  overflow-hidden">
                    <div className="flex justify-between " >
                    <p className='text-2xl font-bold text-black'>
                    Investment
               </p>
               <div className=' w-7 bg-blue-400 text-white  rounded-md font-bold text-sm flex items-center justify-center' >
               <p>
              30
               </p>
               </div>
                    </div>
               <p className='text-xl text-black mt-2'>
                 Lorem ipsum dolor sit amet consectetur 
              </p>
              <div className="flex justify-center w-[100%] ">

            <img src={f_cardimg1} className="w-[100%]" />
              </div>

            
                    </Link>

                    </div>
                    <div className="p-3 relative shadow-2xl bg-gradient-to-tr from-cyan-800 to-cyan-200 h-[500px] lg:h-[350px] min-w-[365px]  lg:w-[40%] rounded-3xl   flex flex-col justify-between hover:-translate-y-2 duration-1000 cursor-pointer">
                    
                    <div className=" p-5 z-10 ">
                    <div className="flex justify-between " >

                    <p className='text-2xl font-bold text-white'>
                 Finance
               </p>
               <div className=' w-7 bg-blue-400 text-white  rounded-md font-bold text-sm flex items-center justify-center' >
               <p>
              25
               </p>
               </div>
                    </div>
               
               <p className='text-xl text-white mt-2'>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint animi necessitatibus aperiam repudiandae nam omnis
              </p>


               <div className='pt-7  '>
                 <button className=' font-bold p-3 bg-teal-400    hover:bg-emerald-900 rounded-full '>
                   <Link to={'/aa'} className='ps-2 text-xl text-white pe-2'>
                   Learn More
                   </Link>
                 </button>
               </div>
                    </div>

               <footer className='flex w-[100%]  p-3 z-10  justify-between  '>
                 <div className='flex text-white text-xl  justify-between w-[30%] '>
                   Share: 
                   <FontAwesomeIcon className='p-2  bg-teal-400 rounded-full hover:bg-emerald-900' size='sm' icon={faTwitter} />
                   <FontAwesomeIcon className='p-2  bg-teal-400 rounded-full hover:bg-emerald-900' size='sm' icon={faFacebook} style={{color: "#ffffff",}} />
                   <FontAwesomeIcon className='p-2  bg-teal-400 rounded-full hover:bg-emerald-900' size='sm' icon={faPinterest} style={{color: "#ffffff",}} />
                 </div>
                 <FontAwesomeIcon className='text-white hover:text-emerald-900' size='xl' icon={faBookmark} />


               </footer>


                    </div>

    
    </div>
</div>


    );
}

export default Finance ;