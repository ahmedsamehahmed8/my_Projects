import Nav from "./componts/nav/nav";
import { Link } from "react-router-dom";

import imag1 from './images/topics/undraw_Remote_design_team_re_urdx.png'
import imag2 from './images/topics/undraw_online_ad_re_ol62.png'
import imag3 from './images/topics/undraw_Podcast_audience_re_4i5q.png'
import f_cardimg1 from './images/topics/undraw_Finance_re_gnv2.png'


import  cardimg2 from"./images/businesswoman-using-tablet-analysis.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark} from '@fortawesome/free-regular-svg-icons'
import { faTwitter,faFacebook,faPinterest  } from '@fortawesome/free-brands-svg-icons'
import Footer from "./componts/footer/footer";




function Page_3 () {
    return (
<>

        <Nav/>
        <div className=' relative bg-gradient-to-tr from-cyan-800 to-cyan-200 w-[100%] h-64 ' >
        </div>
        <div className="container">
            <div className="absolute p-20 top-[90px] z-10">
                <p className=" font-semibold mb-7 text-white text-lg "><Link to={'/'} className="text-cyan-800  text-lg">Homepage</Link> <span>/</span> Topics Listing</p>
                <p className="text-white font-bold text-5xl">Topics Listing</p>
            </div>
        </div>

        <div className="container">
            <p className="text-center mt-32 text-4xl font-semibold">Popular Topics</p>
            <div className="flex flex-col justify-center items-center ">
                <div className="flex-wrap lg:flex-nowrap flex lg:w-[65%]  m-10 rounded-3xl p-10 shadow-2xl hover:-translate-y-3 hover:cursor-pointer duration-1000">
                    <div className="mt-10">
                        <img src={imag1} className=" lg:w-[250px]" />
                    </div>
                    <div className="lg:w-[65%] relative">
                        <p className=" m-2 text-3xl font-semibold ">Web Design</p>
                        <p className="m-2 text-2xl text-slate-500 m-">
                            Topic Listing includes home, listing, detail and contact pages. Feel free to modify this template for your custom websites.
                        </p>
                        <button className="bg-teal-400 p-3 rounded-full m-2 hover:bg-sky-800">
                            <p className="text-white text-xl font-bold ms-2 me-2">Learn More</p>
                        </button>
                        <div className="flex justify-center items-center absolute top-0 right-0 text-white w-8 h-8 bg-sky-400 rounded-lg">
                        <p>14</p>
                    </div>
                    </div>
                    
                </div>
                <div className="flex-wrap lg:flex-nowrap flex  lg:w-[65%]  m-10 rounded-3xl p-10 shadow-2xl hover:-translate-y-3 hover:cursor-pointer duration-1000">
                    <div className="mt-10">
                        <img src={imag1} className=" lg:w-[250px]" />
                    </div>
                    <div className="lg:w-[65%] relative">
                        <p className=" m-2 text-3xl font-semibold ">Advertising</p>
                        <p className="m-2 text-2xl text-slate-500 m-">
                        Visit TemplateMo website to download free CSS templates. Lorem ipsum dolor, sit amet consectetur adipisicing elit animi necessitatibus
                        </p>
                        <button className="bg-teal-400 p-3 rounded-full m-2 hover:bg-sky-800">
                            <p className="text-white text-xl font-bold ms-2 me-2">Learn More</p>
                        </button>
                        <div className="flex justify-center items-center absolute top-0 right-0 text-white w-8 h-8 bg-red-500 rounded-lg">
                        <p>30</p>
                    </div>
                    </div>
                    
                </div>
                <div className="flex-wrap lg:flex-nowrap flex lg:w-[65%]  m-10 rounded-3xl p-10 shadow-2xl hover:-translate-y-3 hover:cursor-pointer duration-1000">
                    <div className="mt-10">
                        <img src={imag1} className=" lg:w-[250px]" />
                    </div>
                    <div className="lg:w-[65%] relative">
                        <p className=" m-2 text-3xl font-semibold ">Podcast</p>
                        <p className="m-2 text-2xl text-slate-500 m-">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit animi necessitatibus
                        </p>
                        <button className="bg-teal-400 p-3 rounded-full m-2 hover:bg-sky-800">
                            <p className="text-white text-xl font-bold ms-2 me-2">Learn More</p>
                        </button>
                        <div className="flex justify-center items-center absolute top-0 right-0 text-white w-8 h-8 bg-yellow-500 rounded-lg">
                        <p>20</p>
                    </div>
                    </div>
                    
                </div>
            </div>


            <div className="flex justify-center p-10 ">
                <div className=" flex justify-between w-[500px] ">

                <button className="bg-sky-300 bg-opacity-30 p-2 rounded-xl hover:bg-teal-400 hover:text-white "><p className="ms-2 me-2 text-lg text-gray-600">Prev</p> </button>
                <button className="w-10 rounded-lg text-lg h-10 bg-teal-400 text-white">1</button>
                <button className="w-10 rounded-lg text-lg h-10 hover:bg-teal-400 hover:text-white ">2</button>
                <button className="w-10 rounded-lg text-lg h-10 hover:bg-teal-400 hover:text-white ">3</button>
                <button className="w-10 rounded-lg text-lg h-10 hover:bg-teal-400 hover:text-white ">4</button>
                <button className="w-10 rounded-lg text-lg h-10 hover:bg-teal-400 hover:text-white ">5</button>
                <button className="bg-sky-300  bg-opacity-30  p-2 rounded-xl hover:bg-teal-400 hover:text-white "><p className="ms-2 me-2 text-lg text-gray-600">Next</p> </button>
                </div>
            </div>


            </div>


            <div className="bg-sky-500 bg-opacity-20">
                <div className="container">
                <p className="p-5 text-4xl font-semibold">Trending Topics</p>
                <div className="flex flex-wrap gap-10 w-[100%] justify-around">

                <div className="bg-white relative p-5 shadow-2xl h-[420px]  min-w-[480px]  w-[45%] rounded-3xl   flex flex-col justify-between hover:-translate-y-2 duration-1000 cursor-pointer">
                    
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





                    <div className="relative  mb-10 bg-gradient-to-tr from-cyan-800 to-cyan-200 h-[420px] min-w-[480px]  w-[45%] rounded-3xl   flex flex-col justify-between hover:-translate-y-2 duration-1000 cursor-pointer">
                    
                    <div className=" p-10 z-10 ">
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
               <br></br>
               <p className='text-xl text-white'>
                 Topic Listing Template includes homepage, listing page, detail page, and contact page. You can feel free to edit and adapt for your CMS requirements.
              </p>


               <div className='pt-7  '>
                 <button onClick={()=>{}} className=' font-bold p-3 bg-teal-400    hover:bg-emerald-900 rounded-full '>
                   <Link to={'/aa'} className='ps-2 text-xl text-white pe-2'>
  learn more  
                   </Link>
                 </button>
               </div>
                    </div>

               <footer className='flex w-[100%] p-10 z-10  justify-between  '>
                 <div className='flex text-white text-xl  justify-between w-[30%] '>
                   Share: 
                   <FontAwesomeIcon className='p-2  bg-teal-400 rounded-full hover:bg-emerald-900' size='sm' icon={faTwitter} />
                   <FontAwesomeIcon className='p-2  bg-teal-400 rounded-full hover:bg-emerald-900' size='sm' icon={faFacebook} style={{color: "#ffffff",}} />
                   <FontAwesomeIcon className='p-2  bg-teal-400 rounded-full hover:bg-emerald-900' size='sm' icon={faPinterest} style={{color: "#ffffff",}} />
                 </div>
                 <FontAwesomeIcon className='text-white hover:text-emerald-900' size='xl' icon={faBookmark} />


               </footer>


<img src={cardimg2} className="rounded-3xl  h-[100%] w-[100%] absolute opacity-10 " />
                    </div>
                
                
                
                </div>
                
                </div>
            </div>

            <Footer/>

</>
    );
}

export default Page_3 ;