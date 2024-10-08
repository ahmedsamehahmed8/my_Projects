

import logo from "../../_images/logo.jpg";
import search from "../../_images/search-icon.jpg";
import trolly from "../../_images/trolly-icon.jpg";
// import Tog from "./tog";

import React from "react";
import toggle from "../../_images/toggle-icon1.jpg";
import { useState , useEffect} from "react";


function Navbar() {

    let [togglee, settogglee] = useState(-1);
    let [visabel, setvisable] = useState();

    useEffect(()=>{
            if(togglee===1){
                setvisable('visible')
            }else{
                setvisable('invisible')
            }
        },[togglee])
    function tt (){
      settogglee(-togglee)
      console.log(togglee)
    }


    return ( 
    <>
    <div className="sticky top-0 bg-white z-20   w-[100%] h-16 items-center flex p-5 ">
    <div className=" w-[100px] min-w-24 ">
          <img alt='sd' src={logo} />
        </div>
        <div className={` invisible lg:visible w-screen min-w-[500px]  h-[100%] flex justify-around items-center `}>
          <div className="flex  min-w-[600px]">
            <button onClick={()=>{scrollTo({top: 0,behavior: "smooth",})}}> <p className="p-5 font-bold	">Home</p> </button>
            <button onClick={()=>{scrollTo({top: 3000,behavior: "smooth",})}}> <p className="p-5 font-bold	"> About </p> </button>
            <button onClick={()=>{scrollTo({top: 1000,behavior: "smooth",})}}> <p className="p-5 font-bold	"> Our Cycle </p> </button>
            <button onClick={()=>{scrollTo({top: 3000,behavior: "smooth",})}}> <p className="p-5 font-bold	"> Shop </p> </button>
            <button onClick={()=>{scrollTo({top: 5200,behavior: "smooth",})}}> <p className="p-5 font-bold	"> News </p> </button>
            <button onClick={()=>{scrollTo({top: 6000,behavior: "smooth",})}}> <p className="p-5 font-bold	"> Contact Us </p> </button>
          </div>
          <div className="flex">
            <p className="p-5 font-bold	"> Login </p>
            <div className="p-5 w-[100px]">
              <img alt='sd' src={trolly} />
            </div>
            <div className="p-5 w-[100px]">
              <img alt='sd' src={search} />
            </div>
          </div>
        </div>
        <div className=" lg:invisible  right-0"> 
        <button onClick={tt}>
            <img alt='sd' src={toggle} />
          </button>
          </div>

      <div className={` z-20 absolute top-[60px] left-0 bg-white w-[100%] lg:hidden ${visabel} flex-col border-2 min-w-[600px] items-center flex`}>
            <p className="p-5 font-bold"> Home </p>
            <p className="p-5 font-bold"> About </p>
            <p className="p-5 font-bold"> Our Cycle </p>
            <p className="p-5 font-bold"> Shop </p>
            <p className="p-5 font-bold"> News </p>
            <p className="p-5 font-bold"> Contact Us </p>
          </div>
      </div>



    </>
    
    );
}

export default Navbar;