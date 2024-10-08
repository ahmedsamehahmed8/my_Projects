

import img from '../../_images/img-6.jpg'
import img2 from '../../_images/img-7.jpg'
import img3 from '../../_images/img-8.jpg'
import img4 from '../../_images/map-icon.jpg'
import img5 from '../../_images/call-icon.jpg'
import img6 from '../../_images/mail-icon.jpg'
import img7 from '../../_images/fb-icon.jpg'
import img8 from '../../_images/twitter-icon.jpg'
import img9 from '../../_images/linkedin-icon.jpg'
import img10 from '../../_images/instagram-icon.jpg'


function News() {
    return (
        <>
        <div className=" bg-gradient-to-r from-cyan-900 to-cyan-800 w-[100%] h-[3400px] lg:h-[2000px] ">
            <div className="p-5 container mx-auto">
                <div className="flex justify-center p-5">
                <p className="text-5xl font-bold text-white">News</p>
                </div>
                <div className="flex justify-center items-center p-5">
                <p className="text-2xl font-bold text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
                </div>
                <div className="w-[100%]  lg:flex">
                    <div className='p-5 bg-white m-5 outline-white rounded-xl outline-4 hover:outline '>
                        <img alt='sd' src={img}/>
                        <p className='p-3 text-3xl'>Speed cycle</p>
                        <div className='flex justify-between p-2'>
                            <p className='text-xl opacity-40 font-semibold'>Post by : Den </p>
                            <p className='text-xl opacity-40 font-semibold'>20-12-2019</p>
                        </div>
                        <p className='text-2xl font-semibold p-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
                    </div>
                    <div className='p-5 bg-white m-5 outline-white rounded-xl outline-4 hover:outline'>
                        <img alt='sd' src={img2}/>
                        <p className='p-3 text-3xl'>Speed cycle</p>
                        <div className='flex justify-between p-2'>
                            <p className='text-xl opacity-40 font-semibold'>Post by : Den </p>
                            <p className='text-xl opacity-40 font-semibold'>20-12-2019</p>
                        </div>
                        <p className='text-2xl font-semibold p-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
                    </div>
                    <div className='p-5 bg-white m-5 outline-white rounded-xl outline-4 hover:outline'>
                        <img alt='sd' src={img3}/>
                        <p className='p-3 text-3xl'>Speed cycle</p>
                        <div className='flex justify-between p-2'>
                            <p className='text-xl opacity-40 font-semibold'>Post by : Den </p>
                            <p className='text-xl opacity-40 font-semibold'>20-12-2019</p>
                        </div>
                        <p className='text-2xl font-semibold p-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
                    </div>
                </div>


                <div className=' w-[100%] flex flex-col  items-center mt-20'>
                    <p className='text-5xl text-white font-bold'>A Call Back</p>
                    <form className=' w-[100%] flex  items-center flex-col'>
                        <input className='rounded-full p-4 m-5 w-[50%]' placeholder='Name' type="text" />
                        <input className='rounded-full p-4 m-5 w-[50%]' placeholder='Email' type="text" />
                        <input className='rounded-full p-4 m-5 w-[50%]' placeholder='Phone Numbar' type="text" />
                        <input className='rounded-full p-4 m-5 w-[50%]' placeholder='Massage'  type="text" />
                        <button className='bg-amber-300 p-5 rounded-full ps-11 pe-11 ' >
                            <p className=' text-2xl text-white'>SEND</p> 
                        </button>
                    </form>
                </div>

                <div className=' mt-10 flex flex-col lg:flex-row w-[100%] '>
                    <div className=' w-[100%] lg:w-[70%]'>
                        location
                    </div>
                    <div className=' w-[100%] lg:w-[30%]'>
                        <div className='flex p-3 '>
                            <img alt='sd' className=' h-10 lg:h-auto  m-3 w-5' src={img4}/>
                            <p className='m-3 text-white text-lg lg:text-xl'>Page when looking at its layou</p>
                        </div>
                        <div className='flex p-3 '>
                            <img alt='sd' className=' h-10 lg:h-auto   m-3 w-5' src={img5}/>
                            <p className='m-3 text-white text-lg lg:text-xl'>Call Now +01 123467890</p>
                        </div>
                        <div className='flex p-3 '>
                            <img alt='sd' className=' h-10 lg:h-auto   m-3 w-6 ' src={img6}/>
                            <p className='m-3 text-white text-lg lg:text-xl'>demo@gmail.com</p>
                        </div>
                        <div className='flex p-3 '>
                            <img alt='sd' className='m-3 w-6 ' src={img7}/>
                            <img alt='sd' className='m-3 w-6 ' src={img8}/>
                            <img alt='sd' className='m-3 w-6 ' src={img9}/>
                            <img alt='sd' className='m-3 w-6 ' src={img10}/>
                        </div>
                        <form className=' '>
                            <input className='m-4 p-4 outline-none' placeholder='Enter Your Email' type="text" />
                            <br />
                            <button className='m-4 ps-4 pe-4 p-2 bg-amber-500 hover:bg-white hover:text-gray-500'><p className='text-white'>Subscribe</p></button>
                        </form>

                    </div>
                </div>







            </div>
        </div>
        </>


    );
}

export default News;