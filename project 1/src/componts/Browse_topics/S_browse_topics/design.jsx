
import  d_cardimg1 from"../../../images/topics/undraw_Remote_design_team_re_urdx.png"
import  d_cardimg2 from"../../../images/topics/undraw_Redesign_feedback_re_jvm0.png"
import  d_cardimg3 from"../../../images/topics/colleagues-working-cozy-office-medium-shot.png"

import { Link } from "react-router-dom"



function Design (props) {
    return ( 


        <div className={`design ${props.className}  `}>

        <div className=' p-5 flex flex-wrap  justify-center  w-[100%] gap-3 '>
              <Link to={'/aa'} className="shadow-2xl bg-white lg:h-[350px] min-w-[365px] lg:w-[20%]  rounded-3xl p-6 m-5  flex flex-col  hover:-translate-y-2 duration-1000 cursor-pointer">
                <div className="flex justify-between">
                  <p className='text-2xl font-bold' >Web Design</p>
                  <div className=' w-7 bg-blue-400 text-white text-sm rounded-md font-bold flex items-center justify-center' >
                    <p>
                      14
                    </p>
                    </div>
                  </div>
                  <br/>
                  <p className='text-xl text-gray-500'> Topic Listing Template based on Bootstrap 5</p>
                  <div className="">
                    <img className='w-[100%]' src={d_cardimg1} alt="" />
                  </div>
                </Link>
                
  
              <Link to={'/aa'} className=" shadow-2xl bg-white lg:h-[350px] min-w-[365px]  lg:w-[20%]  rounded-3xl m-5 p-6  flex flex-col  hover:-translate-y-2 duration-1000 cursor-pointer">
                <div className="flex justify-between">
                  <p className='text-2xl font-bold' >Graphic</p>
                  <div className=' w-7 bg-blue-400 text-white text-sm rounded-md font-bold flex items-center justify-center' >
                    <p>
                      75
                    </p>
                    </div>
                  </div>
                  <br/>
                  <p className='text-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur </p>
                  <div className="">
                    <img className='w-[100%]' src={d_cardimg2} alt="" />
                  </div>
                </Link>
  
  
  
  
              <Link to={'/aa'} className=" shadow-2xl bg-white lg:h-[350px] min-w-[365px]  lg:w-[20%]  rounded-3xl m-5 p-6  flex flex-col  hover:-translate-y-2 duration-1000 cursor-pointer">
                <div className="flex justify-between">
                  <p className='text-2xl font-bold' >Logo Design</p>
                  <div className=' w-7 bg-blue-400 text-white text-sm rounded-md font-bold flex items-center justify-center' >
                    <p>
                      100
                    </p>
                    </div>
                  </div>
                  <br/>
                  <p className='text-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur</p>
                  <div className=" flex justify-center overflow-hidden  ">
                    <img className=' w-[60%]    ' src={d_cardimg3} alt="" />
                  </div>
                </Link>
              </div>
        </div>



    );
}

export default Design ;