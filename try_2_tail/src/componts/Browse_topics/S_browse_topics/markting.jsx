
import  m_cardimg1 from"../../../images/topics/undraw_online_ad_re_ol62.png"
import  m_cardimg2 from"../../../images/topics/undraw_Group_video_re_btu7.png"
import  m_cardimg3 from"../../../images/topics/undraw_viral_tweet_gndb.png"


import { Link } from "react-router-dom";





function Markting (props) {
    return ( 


        <div className={`design ${props.className}  `}>

        <div className=' flex flex-wrap  justify-center   w-[100%] gap-3 '>
              <Link to={'/aa'} className=" shadow-2xl bg-white lg:h-[350px] min-w-[365px]  lg:w-[20%]  rounded-3xl p-6 m-5    hover:-translate-y-2 duration-1000 cursor-pointer">
                <div className=" flex justify-between">
                  <p className='text-2xl font-bold' >Advertising</p>
                  <div className='  w-7 bg-red-500 text-white text-sm rounded-md font-bold flex items-center justify-center' >
                    <p>
                      30
                    </p>
                    </div>
                  </div>
                  <br/>
                  <p className='text-xl text-gray-500'>Lorem ipsum dolor sit amet, consectetur</p>
                  <div className="">
                    <img className='w-[100%]' src={m_cardimg1} alt="" />
                  </div>
                </Link>
                
  
              <Link to={'/aa'} className=" shadow-2xl bg-white lg:h-[350px] min-w-[365px]  lg:w-[20%]  rounded-3xl m-5 p-6  flex flex-col  hover:-translate-y-2 duration-1000 cursor-pointer">
                <div className="flex justify-between">
                  <p className='text-2xl font-bold' >Video Content</p>
                  <div className=' w-7 bg-red-500 text-white text-sm rounded-md font-bold flex items-center justify-center' >
                    <p>
                      65
                    </p>
                    </div>
                  </div>
                  <br/>
                  <p className='text-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur </p>
                  <div className="">
                    <img className='w-[90%]' src={m_cardimg2} alt="" />
                  </div>
                </Link>
  
  
  
  
              <Link to={'/aa'} className=" shadow-2xl bg-white lg:h-[350px] min-w-[365px]  lg:w-[20%]  rounded-3xl m-5 p-6  flex flex-col  hover:-translate-y-2 duration-1000 cursor-pointer">
                <div className="flex justify-between">
                  <p className='text-2xl font-bold' >Logo Design</p>
                  <div className=' w-7 bg-red-500 text-white text-sm rounded-md font-bold flex items-center justify-center' >
                    <p>
                      50
                    </p>
                    </div>
                  </div>
                  <br/>
                  <p className='text-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur</p>
                  <div className=" flex justify-center overflow-hidden  ">
                    <img className=' w-[100%]    ' src={m_cardimg3} alt="" />
                  </div>
                </Link>
              </div>

            
        </div>


    );
}

export default Markting ;