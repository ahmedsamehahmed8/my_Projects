import Nav from "./componts/nav/nav";
import { Link } from "react-router-dom";

function Page_3() {
    return (

        <>
        
        <Nav/>
        <div className=' relative bg-gradient-to-tr from-cyan-800 to-cyan-200 w-[100%] h-64 ' >
          </div>
          <div className="container">
            <div className="absolute p-20 top-[90px] z-10">
        <p className=" font-semibold mb-7 text-white text-lg "><Link to={'/'} className="text-cyan-800  text-lg">Homepage</Link> <span>/</span> Contact Form</p>
          <p className="font-bold text-5xl">Contact Form</p>
          </div>
            </div>



<div className="bg-sky-300 bg-opacity-20 ">
<div className="container">

                <p className="text-4xl pt-10 pb-10 font-semibold">We'd love to hear from you</p>
            <div className=" flex flex-wrap">
                <div className="lg:w-[50%] w-[100%]">
        
            <form className="flex flex-col">
                <div className="flex m-5 justify-between">
                    <input type="text" className=" rounded-3xl p-3 out outline outline-1 outline-slate-400   w-[45%] focus:outline-4 focus:outline-blue-400 " placeholder="Name"/>
                    <input type="text" className=" rounded-3xl p-3 out outline outline-1 outline-slate-400   w-[45%] focus:outline-4 focus:outline-blue-400" placeholder="Email Address"/>
                </div>
                <input type="text" className=" rounded-3xl p-3 out outline outline-1 outline-slate-400 m-5 focus:outline-4 focus:outline-blue-400" placeholder="subject"/>
                <textarea placeholder="Tell me about the project " className=" rounded-3xl p-3 out outline outline-1 outline-slate-400   m-5  focus:outline-4 focus:outline-blue-400"></textarea>
                <button className="bg-teal-400 w-[200px] text-white text-xl font-semibold self-end rounded-full m-5 p-4 hover:bg-sky-800">Submit</button>
            </form>
                </div>

                <div className="lg:w-[50%] w-[100%]">
                    <p className="mb-60">google mapes</p>
                    <div>
                    <p className="text-2xl font-semibold">Topic Listing Center</p>
                    <p className="text-lg mt-3 text-slate-500 font-semibold">Bay St &, Larkin St, San Francisco, CA 94109, United States</p>
                </div>
            
                </div>
            </div>
</div>
</div>
        </>


    );
}

export default Page_3;