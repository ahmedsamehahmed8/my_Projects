

import cycle from '../../_images/img-1.png'
import Image from "next/image";




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight ,faChevronLeft} from '@fortawesome/free-solid-svg-icons'




function Homee() {


    return (  
        <>
        <div className="w-[100%]  relative  ">
        <div className="w-[70%] absolute top-[-80px] h-[550px] bg-cyan-900 right-0 z-0">
        </div>
        <div className="z-10 relative flex container mx-auto">
          <div className="flex flex-col items-center w-[60%]">
            <div className="p-5  rounded-[100%] bg-amber-400">
            <p className=" font-bold text-cyan-900">BEST</p>
            </div>
            <Image src={cycle} className="z-10 w-[500px] min-w-[400px] lg:w-[600px] lg:min-w-[600px]"/>
          </div>
          <div className="w-[40%] lg:w-[20%] flex flex-col ">
            <p className="font-bold p-3 text-6xl text-white">New <br/> Model <br/> Cycle</p>
            <p className="font-bold p-3  w-[100%]  text-white">It is a long established fact that a reader will be distracted by the readable content</p>
            <button className="font-bold w-[40%]  text-white p-2 bg-yellow-400"> Shop Now</button>
            <div className="lg:invisible  w-[100%] flex justify-between mt-7">
              <button className="p-2 bg-amber-400 w-[40%]"><FontAwesomeIcon icon={faChevronLeft} size="lg" style={{color: "#000000",}} /> </button>
              <button className=" p-2 bg-amber-400 w-[40%]"><FontAwesomeIcon icon={faChevronRight} size="lg" style={{color: "#000000",}} /> </button>
            </div>
          </div>
          <div className="lg:visible  w-[20%] flex items-end invisible">
            <div className="  w-[50%] flex  ">
              <button className="w-[100px] m-2 bg-amber-400 p-2"><FontAwesomeIcon icon={faChevronLeft} size="lg" style={{color: "#000000",}} /> </button>
              <button className="w-[100px] m-2 bg-amber-400 p-2"><FontAwesomeIcon icon={faChevronRight} size="lg" style={{color: "#000000",}} /> </button>
            </div>
          </div>
        </div>
      </div>
        </>
        
    );
}

export default Homee;