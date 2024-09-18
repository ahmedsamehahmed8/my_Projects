

import img2 from '../../_images/img-2.png' 
import img3 from '../../_images/img-3.png' 
import img4 from '../../_images/img-4.png' 
import Image from "next/image";


function Our_cycle() {
    return (

        <>
        <div className='container mx-auto'>

            <div className=" mt-40 flex flex-col items-center ">
        <p className="font-bold text-4xl p-5">Our cycle</p>
        <p className="text-lg p-5 ">It is a long established fact that a reader will be distracted by the</p>
      </div>
      <div className="flex mt-60">
        <div className="w-[50%] relative">
          <div className="absolute  w-[100%] flex items-center justify-center">
            <div className=" lg:h-[500px] lg:w-[300px] h-[350px] w-[200px] bg-amber-500 skew-x-12 "></div>
            <div className=" ms-20 absolute   ">
              <Image className='w-[200px] lg:w-[100%]' src={img2}/>
            </div>          
          </div>

        </div>
        <div className="w-[50%]">
          <div className="flex p-5">
            <div className="w-[50%]">
              <div className=" w-[60%] border border-black translate-y-6 "></div>
            </div>
            <div className="w-[50%] ">
              <p className="text-5xl font-bold">Cycles</p>
            </div>
          </div>
          <p className="p-5 md:w-[400px] lg:w-[500px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
          <div className="w-[100%] p-5 flex items-center">
            <div className="w-[50%]">
              <button className=" bg-cyan-900"><p className="p-3 text-white font-bold text-lg">Buy Now</p></button>
            </div>
            <p className="w-[50%] text-2xl font-bold ">Price <span className="text-yellow-600">$</span> 200</p>
          </div>
        </div>

      </div>


        <div className='w-[100%]  mt-16 lg:mt-72 '>
          <div className='flex'>
          <div className="w-[50%]">
            <div className="flex p-5">
              <div className="w-[50%]">
                <div className=" w-[60%] border border-black translate-y-6 "></div>
              </div>
              <div className="w-[50%] ">
                <p className="text-4xl font-bold">Stylis Cycle</p>
              </div>
            </div>
            
            <p className="p-5 md:w-[400px] lg:w-[500px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
            <div className="w-[100%] p-5 flex items-center">
              <div className="w-[50%]">
                <button className=" bg-cyan-900"><p className="p-3 text-white font-bold text-lg">Buy Now</p></button>
              </div>
              <p className="w-[50%] text-2xl font-bold ">Price <span className="text-yellow-600">$</span> 200</p>
            </div>
          </div>
          <div className="w-[50%] relative">
          <div className="absolute  w-[100%] flex items-center justify-center">
            <div className=" lg:h-[500px] lg:w-[300px] h-[350px] w-[200px] bg-amber-500 skew-x-12 "></div>
            <div className=" ms-20 absolute   ">
              <Image className='w-[200px] lg:w-[100%]' src={img3}/>
            </div>          
          </div>

        </div>
        </div>
        </div>

        <div className="flex mt-60 ">
        <div className="w-[50%] relative">
          <div className="absolute  w-[100%] flex items-center justify-center">
            <div className=" lg:h-[500px] lg:w-[300px] h-[350px] w-[200px] bg-amber-500 skew-x-12 "></div>
            <div className=" ms-20 absolute   ">
              <p className='p-5 bg-white rounded-[100%] w-[50px] ms-6 fixed'>3</p>
              <Image className='w-[200px] lg:w-[100%]' src={img3}/>
            </div>          
          </div>

        </div>
        <div className="w-[50%]  ">
          <div className="flex p-5">
            <div className="w-[50%]">
              <div className=" w-[60%] border border-black translate-y-6 "></div>
            </div>
            <div className="w-[50%] ">
              <p className="text-5xl font-bold">Mordern Cycle</p>
            </div>
          </div>
          <p className="p-5 md:w-[400px] lg:w-[500px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
          <div className="w-[100%] p-5 flex items-center">
            <div className="w-[50%]">
              <button className=" bg-cyan-900"><p className="p-3 text-white font-bold text-lg">Buy Now</p></button>
            </div>
            <p className="w-[50%] text-2xl font-bold ">Price <span className="text-yellow-600">$</span> 200</p>
          </div>
        </div>
      </div>
      <div className='flex  justify-center m-40 lg:m-60'>
        <button className='bg-amber-400 text-white text-2xl font-bold  p-4'>Read More</button>
      </div>



        </div>
        </>

    );
}

export default Our_cycle;