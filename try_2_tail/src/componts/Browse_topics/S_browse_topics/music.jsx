

import  mu_cardimg1 from"../../../images/topics/undraw_Compose_music_re_wpiw.png"
import  mu_cardimg2 from"../../../images/topics/undraw_happy_music_g6wc.png"
import  mu_cardimg3 from"../../../images/topics/undraw_Podcast_audience_re_4i5q.png"












function Music(props) {
    return ( 


        <div className={`design ${props.className}  `}>

        <div className=' flex flex-wrap  justify-center   w-[100%] gap-3 '>
              <div className=" overflow-hidden shadow-2xl bg-white lg:h-[350px] min-w-[365px]  lg:w-[20%]  rounded-3xl p-6 m-5    hover:-translate-y-2 duration-1000 cursor-pointer">
                <div className=" flex justify-between">
                  <p className='text-2xl font-bold' >Composing Song</p>
                  <div className='  w-7 bg-orange-300 text-white text-sm rounded-md font-bold flex items-center justify-center' >
                    <p>
                      45
                    </p>
                    </div>
                  </div>
                  <br/>
                  <p className='text-xl text-gray-500'>Lorem ipsum dolor sit amet, consectetur</p>
                  <div className=" flex justify-center">
                    <img className='w-[80%]' src={mu_cardimg1} alt="" />
                  </div>
                </div>
                
  
              <div className="overflow-hidden shadow-2xl bg-white lg:h-[350px] min-w-[365px]  lg:w-[20%]  rounded-3xl m-5 p-6  flex flex-col  hover:-translate-y-2 duration-1000 cursor-pointer">
                <div className="flex justify-between">
                  <p className='text-2xl font-bold' >Online Music</p>
                  <div className=' w-7 bg-orange-300 text-white text-sm rounded-md font-bold flex items-center justify-center' >
                    <p>
                      45
                    </p>
                    </div>
                  </div>
                  <br/>
                  <p className='text-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur </p>
                  <div className="flex justify-center">
                    <img className='w-[80%]' src={mu_cardimg2} alt="" />
                  </div>
                </div>
  
  
  
  
              <div className="  shadow-2xl bg-white lg:h-[350px] min-w-[365px]  lg:w-[20%]  rounded-3xl m-5 p-6  flex flex-col  hover:-translate-y-2 duration-1000 cursor-pointer">
                <div className="flex justify-between">
                  <p className='text-2xl font-bold' >Podcast</p>
                  <div className=' w-7 bg-orange-300 text-white text-sm rounded-md font-bold flex items-center justify-center' >
                    <p>
                      20
                    </p>
                    </div>
                  </div>
                  <br/>
                  <p className='text-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur</p>
                  <div className=" flex justify-center overflow-hidden  ">
                    <img className=' w-[100%]    ' src={mu_cardimg3} alt="" />
                  </div>
                </div>
              </div>

            
        </div>




    );
}

export default Music;