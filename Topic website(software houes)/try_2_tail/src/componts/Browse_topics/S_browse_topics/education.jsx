

import { checkPropTypes } from 'prop-types';

import e_cardimg1 from '../../../images/topics/undraw_Graduation_re_gthn.png'
import e_cardimg2 from '../../../images/topics/undraw_Educator_re_ju47.png'








function Education({hh}) {

    





    return (



        <div className={`education ${hh}  `} >
    <div className=" p-5 flex flex-wrap justify-center gap-7">


<div className="relative p-3 shadow-2xl h-[500px] lg:h-[350px] min-w-[365px]  lg:w-[40%] rounded-3xl   flex flex-col justify-between hover:-translate-y-2 duration-1000 cursor-pointer">
                    
                    <div className=" p-5 z-10 overflow-hidden">
                    <div className="flex justify-between " >

                    <p className='text-2xl font-bold text-black'>
                    Graduation
               </p>
               <div className=' w-7 bg-green-500 text-white  rounded-md font-bold text-sm flex items-center justify-center' >
               <p>
              80
               </p>
               </div>
                    </div>
               <p className='text-xl text-black mt-2'>
                 Lorem ipsum dolor sit amet consectetur 
              </p>
              <div className="flex justify-center w-[100%] ">

            <img src={e_cardimg1} className="w-[100%]" />
              </div>

            
                    </div>




                    </div>






                    <div className="p-3 relative shadow-2xl  h-[500px] lg:h-[350px] min-w-[365px]  lg:w-[40%] rounded-3xl   flex flex-col justify-between hover:-translate-y-2 duration-1000 cursor-pointer">
                    <div className=" p-5 z-10 overflow-hidden">
                    <div className="flex justify-between " >

                    <p className='text-2xl font-bold text-black'>
                    Educator
               </p>
               <div className=' w-7 bg-green-500 text-white  rounded-md font-bold text-sm flex items-center justify-center' >
               <p>
              30
               </p>
               </div>
                    </div>
               <p className='text-xl text-black mt-2'>
                 Lorem ipsum dolor sit amet consectetur 
              </p>
              <div className="flex justify-center w-[100%] ">

            <img src={e_cardimg2} className="w-[70%]" />
              </div>

            
                    </div>
                    </div>

    
                    
    </div>
</div>





    );
}

export default Education;