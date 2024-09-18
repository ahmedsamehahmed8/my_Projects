import Nav from "./componts/nav/nav";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark} from '@fortawesome/free-regular-svg-icons'

import  cardimg1 from"./images/topics/undraw_Remote_design_team_re_urdx.png"
import img1 from './images/businesswoman-using-tablet-analysis.jpg'
import img2 from './images/colleagues-working-cozy-office-medium-shot.jpg'
import img3 from './images/rear-view-young-college-student.jpg'
import Footer from "./componts/footer/footer";
import { useRef } from "react";
import { Link } from "react-router-dom";




function Page_2() {

    let q = useRef()


    
    return (
        <>
            <Nav/>
            <div className=' relative bg-gradient-to-tr from-cyan-800 to-cyan-200 w-[100%] h-[900px] lg:h-100 ' >
            </div>
<div className=" container mx-auto">

            <div className=" container mx-auto flex flex-wrap justify-center gap-20 items-center w-[100%]  h-[500px]   absolute top-[95px]">
                <div className=" flex flex-col  h-[70%]  p-5 mt-10  ">
                    <div className="flex p-3 ">
                        <Link to={'/'} className="text-cyan-800 font-bold text-lg">Homepage </Link>
                        <p className="font-bold text-lg text-white">
                        / Web Design 
                        </p>
                    </div>
                    <p className="text-5xl p-3 font-bold text-white ">Introduction to <br/> Web Design 101</p>
                    <div className="flex p-3 mt-5 items-center">
                    <button onClick={()=>{ q.current.scrollIntoView({block:"center", behavior:'smooth' })}} className=" bg-transparent border-4 p-2  rounded-full text-teal-400 border-teal-400 text-xl font-bold"> <p className="ps-2 pe-2"> Read More </p></button>
                    <FontAwesomeIcon className=' ms-7 text-white hover:text-emerald-900' size='2xl' icon={faBookmark} />

                    </div>
                </div>


                <div className="flex lg:w-[40%] max-w-[600px] items-center p-5 justify-center">

                    <img src={cardimg1} className="w-[100%]  rounded-3xl"/>
                    
                </div>
            </div>



<div ref={q} className="mt-10 ">
    <p className="text-4xl font-bold p-3">Introduction to Web Design</p>
    <p className=" text-2xl p-3">So how can you stand out, do something unique and interesting, build an online business, and get paid enough to change life. Please visit TemplateMo website to download free website templates.</p>
        <p className=" text-2xl p-3"> <span className="font-bold"> There are so many ways to make money online. </span> Below are several platforms you can use to find success. Keep in mind that there is no one path everyone can take. If that were the case, everyone would have a million dollars.</p>
</div>

<div className=" m-10 rounded-xl bg-sky-300 bg-opacity-20">
    <div className=" text-3xl p-10 text-center font-bold   ">
        Freelancing your skills isn’t going to make you a millionaire overnight.
    </div>
</div>

<div className="flex flex-col ">

    <div className=" w-[100%]  flex flex-wrap p-5 justify-around items-center ">
        <img src={img1} className="w-[700px] rounded-[50px] p-4" />
        <img src={img2} className="w-[700px] rounded-[50px] p-4" />
    </div>


    <div className="text-2xl p-10">
        Most people start with freelancing skills they already have as a side hustle to build up income. This extra cash can be used for a vacation, to boost up savings, investing, build business.
    </div>
</div>
</div>

<div className="bg-sky-300 bg-opacity-20 p-20">
    <div className="container">

    
    <div className="flex flex-wrap items-center justify-center ">
        <div className="md:w-[40%] w-[100%] ">
        <img src={img3} className=" rounded-3xl" />
        </div>

        <div className="flex flex-col md:w-[40%] w-[100%] p-14 ">
            <p className="text-4xl font-semibold p-3">Get Newsletter</p>
            <input type="text" placeholder="Email Address" className="min-w-[200px] focus:outline-none focus:border-blue-200 outline outline-slate-300 outline-1 p-3 border-4 border-transparent rounded-full m-3"/>
            <button className="min-w-[200px] p-4 rounded-full m-3 bg-teal-400 text-white text-2xl font-semibold hover:bg-sky-800" >Subscribe</button>


        </div>

    </div>

    </div>
</div>

<Footer/>


        
        </>
    );
}

export default Page_2;