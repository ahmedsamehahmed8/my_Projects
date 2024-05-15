import  cardimg1 from"../../images/topics/undraw_Remote_design_team_re_urdx.png"
import  cardimg2 from"../../images/businesswoman-using-tablet-analysis.jpg"



import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import { useRef } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {faBookmark} from '@fortawesome/free-regular-svg-icons'

import { faTwitter,faFacebook,faPinterest  } from '@fortawesome/free-brands-svg-icons'









function Home(props) {



    return (

        <div ref={props.home} className='flex flex-col  items-center justify-around   w-[100%] absolute top-24 '>
                <p className='text-6xl font-bold text-white p-5 lg:p-10'>Discover. Learn. Enjoy</p>
             <p className='text-2xl font-bold text-cyan-700 p-5 lg:p-10'>platform for creatives around the world</p>
                
                
                 <div className='bg-white w-[45%] min-w-[400px] p-2  lg:p-4 rounded-full relative  '>
               <FontAwesomeIcon size='lg' icon={faMagnifyingGlass} className='absolute  p-2 lg:p-3' />
               <input type="text" className='ms-9 w-[50%] p-2 focus:border-none'  placeholder='Design,Code,Marketing,Finance ...'/>
                   <button className='absolute p-1 lg:p-3 bg-teal-400 rounded-full w-36 top-2 right-4 opacity-60 hover:bg-cyan-950'>
                     <p className='text-white font-bold text-xl'> Search </p>
                   </button>
                 </div>

                 
                <div className=" w-[100%] h-[450px] m-10 flex flex-wrap justify-center gap-5 items-center">
                    <Link to={'/aa'} className="bg-white md:h-[100%] min-w-[480px] w-[365px]   rounded-3xl p-10 overflow-hidden flex flex-col  hover:-translate-y-2 duration-1000 cursor-pointer"><Link to={'/aa'}></Link>
                    <div className="flex justify-between">

                    <p className='text-2xl font-bold' >Web Design</p>
                    <div className=' w-7 bg-blue-400 text-white text-sm rounded-md font-bold flex items-center justify-center' >
               <p>
               14
               </p>
               </div>
                    </div>
           <br/>
             <p className='text-xl text-gray-500'>When you search for free CSS templates, you will notice that TemplateMo is one of the best websites.</p>
            <div className="">
             <img className='w-[100%]' src={cardimg1} alt="" />
            </div>
                    </Link>




                    <div className="relative  bg-gradient-to-tr from-cyan-800 to-cyan-200 h-[100%] min-w-[480px]  w-[35%] rounded-3xl   flex flex-col justify-between hover:-translate-y-2 duration-1000 cursor-pointer">
                    
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
                   <Link to={'aa'} className='ps-2 text-xl text-white pe-2'>
  learn more  
{/* <Routes>           
  <Route path="/ddt" element={<Dt />} />
</Routes> */}
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

























































































//         <>
        
//         <div className='flex flex-col  items-center justify-around h-[800px]  w-[100%] absolute top-24 '>
//         <p className='text-6xl font-bold text-white'>Discover. Learn. Enjoy</p>
//         <p className='text-2xl font-bold text-cyan-700'>platform for creatives around the world</p>
        
        
//         <div className='bg-white w-3/5 p-4 rounded-full relative '>
//         <FontAwesomeIcon size='lg' icon={faMagnifyingGlass} className='absolute  p-3' />
//           <input type="text" className='ms-9 w-96 p-2 focus:border-none'  placeholder='Design,Code,Marketing,Finance ...'/>
//           <button className='absolute p-3 bg-teal-400 rounded-full w-36 top-2 right-4 opacity-60 hover:bg-cyan-950'>
//             <p className='text-white font-bold text-xl'> Search </p>
//           </button>
//         </div>


//       <div className='flex  justify-center  items-center gap-5  border-4 '>
//           <div className='bg-white  w-[30%] p-7 relative rounded-3xl hover:-translate-y-2 duration-1000 cursor-pointer'>
//             <div className='absolute  right-5 w-7 h-7 bg-blue-400 text-white p-1 rounded-md font-bold flex items-center content-center' >
//               <p>
//               14
//               </p>
//               </div>

//             <p className='text-2xl font-bold' >Web Design</p>
//             <br/>
//             <p className='text-xl text-gray-500'>When you search for free CSS templates, you will notice that TemplateMo is one of the best websites.</p>
            
//             <img className='p-1' src={cardimg1} alt="" />
//           </div>


//             <div className=' p-7 rounded-3xl   flex flex-col h-[500px] w-[30%] top-0 opacity-80 bg-gradient-to-tr from-cyan-800 to-cyan-200' >
//           <div className='relative rounded-3xl hover:-translate-y-2 duration-1000 cursor-pointer  '>
//           <div className='absolute  right-5 w-7 h-7 bg-blue-400 text-white p-1 rounded-md font-bold flex items-center content-center top-5' >
//               <p>
//               25
//               </p>
//               </div>
              
              
//               <div className="bg-[url('../../images/businesswoman-using-tablet-analysis.jpg')]">
//             {/* <img className='  rounded-3xl  ' src={cardimg2} alt="" /> */}
//               </div>
//               <p className='text-2xl font-bold text-white'>
//                 Finance
//               </p>
//               <br></br>
//               <p className='text-xl text-white'>
//                 Topic Listing Template includes homepage, listing page, detail page, and contact page. You can feel free to edit and adapt for your CMS requirements.
//               </p>


//               <div className='pt-5  '>
//                 <button className='text-lg font-bold p-3 bg-teal-400   text-white hover:bg-emerald-900 rounded-full '>
//                   <p className='ps-3 pe-3'>
//                   Learn More
//                   </p>
//                 </button>
//               </div>

//               <footer className='flex w-[100%]   justify-between  bottom-0'>
//                 <div className='flex text-white text-xl justify-between w-52 '>
//                   Share: 
//                   <FontAwesomeIcon className='p-2  bg-teal-400 rounded-full hover:bg-emerald-900' size='sm' icon={faTwitter} />
//                   <FontAwesomeIcon className='p-2  bg-teal-400 rounded-full hover:bg-emerald-900' size='sm' icon={faFacebook} style={{color: "#ffffff",}} />
//                   <FontAwesomeIcon className='p-2  bg-teal-400 rounded-full hover:bg-emerald-900' size='sm' icon={faPinterest} style={{color: "#ffffff",}} />
//                 </div>
//                 <FontAwesomeIcon className='text-white hover:text-emerald-900' size='xl' icon={faBookmark} />


//               </footer>

//             </div>
//           </div>
//       </div>
//         </div>
//       {/* <div className='grid grid-flow-row-dense grid-cols-12   '>
//         <div className='col-span-4'>
//           <div className='bg-white '>
//             <p>Web Design</p>
//             <p>When you search for free CSS templates, you will notice that TemplateMo is one of the best websites.</p>

//           </div>


//         </div>

//         <div className="col-span-8">
// asd
//         </div>
//       </div> */}
        
//         </>

    );
}

export default Home;