
import img5 from '../../_images/img-5.png' 
import about from '../../_images/about-bg.png' 
import Image from "next/image";




function AOCS() {
    return ( 

        <>
            <div className="relative  ">
        <Image className="absolute w-[100%] " src={about}/>
        <div className="relative w-[100%] h-[700px] lg:h-[1000px] flex flex-col items-center justify-between  ">
          <p className=" text-4xl lg:text-6xl text-white font-bold p-5">About Our cycle Store</p>
          <p className="text-2xl lg:font-bold text-white md:w-[750px] p-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
          
          
          <div className="md:mt-20 relative lg:h-[800px] lg:w-[600px] md:h-[500px] md:w-[400px] h-[350px] w-[200px] bg-white skew-x-12 ">
            <Image className="relative" src={img5}/>
          </div>

        </div>
      </div>
      <div className='flex  justify-center m-20 lg:m-40'>
        <button className='bg-amber-400 text-white text-2xl font-bold  p-4'>Read More</button>
      </div>
      

        </>


    );
}

export default AOCS;