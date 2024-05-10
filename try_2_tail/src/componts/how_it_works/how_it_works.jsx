

import imgg from '../../images/colleagues-working-cozy-office-medium-shot.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faBookOpen } from '@fortawesome/free-solid-svg-icons'
import {faBookmark} from '@fortawesome/free-regular-svg-icons'
import './how_it_works.css'




function How_it_works(props) {
    return ( 

        <div ref={props.hiw} className='bg-gradient-to-tr from-cyan-800 to-cyan-200 relative overflow-hidden  '>
  <img src={imgg} className='opacity-20  absolute h-[100%] w-[100%]' />
  <div className=' flex container mx-auto   z-10 justify-end   ' >
    <div className=' mt-5 flex justify-center  '>
      <div className='flex flex-col justify-around items-center lg:h-[85%] h-[85%]  '>
        <div className=' flex bg-white w-[10px] h-[55%] absolute '>
          
        </div>
        <div className=' p-2 z-10  bg-teal-400 rounded-full hover:bg-emerald-900'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='p-6  border-4  rounded-full ' size='xl' style={{color: "#ffffff",}} />        
        </div>
        <div className=' p-2 z-10  bg-teal-400 rounded-full hover:bg-emerald-900'>
        <FontAwesomeIcon icon={faBookmark} className='p-6  border-4  rounded-full ' size='xl' style={{color: "#ffffff",}} />        
        </div>
        <div className=' p-2 z-10  bg-teal-400 rounded-full hover:bg-emerald-900'>
        <FontAwesomeIcon icon={faBookOpen} className='p-6  border-4  rounded-full ' size='xl' style={{color: "#ffffff",}} />        
        </div>
      </div>


      <div className='flex flex-col  justify-between w-[60%]   items-center p-5'>
        <p className=' text-3xl lg:text-5xl font-bold  p-5 text-white w-[80%]'>How does it work?</p>
        <div className='flex flex-col items-start w-[100%]  gap-32 '>
          <div className=' flex gap-3 flex-col'>
            <p  className='lg:text-3xl text-xl font-bold text-white'>Search your favourite topic</p>
            <p className='lg:text-2xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque magnam? Sequi, cupiditate quibusdam alias illum sed esse ad dignissimos libero sunt, quisquam numquam aliquam? Voluptas, accusamus omnis?</p>
          </div>
          <div className=' flex gap-3 flex-col'>
            <p  className=' lg:text-3xl text-xl font-bold text-white'>Bookmark & Keep it for yourself</p>
            <p className='lg:text-2xl text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi vero quisquam, rem assumenda similique voluptas distinctio, iste est hic eveniet debitis ut ducimus beatae id? Quam culpa deleniti officiis autem?</p>
          </div>
          <div className=' flex gap-3 flex-col'>
            <p  className='lg:text-3xl text-xl font-bold text-white'>Read & Enjoy</p>
            <p className='lg:text-2xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque magnam? Sequi, cupiditate quibusdam alias illum sed esse ad dignissimos libero sunt, quisquam numquam aliquam? Voluptas, accusamus omnis?</p>
          </div>  
        </div>
        <div className='flex z-10 lg:w-[70%] lg:mt-10 flex-wrap'>
<p className='text-white me-5  mt-10 sm:mb-10 p-2 lg:text-xl'>Want to learn more?</p>
<button className='border-2 sm:mt-10 mb-10 rounded-full p-2 text-emerald-200 border-emerald-200  lg:text-lg font-bold bg-transparent hover:bg-teal-400 hover:border-teal-400 hover:text-white '>Check out Youtube</button>
  </div>




      </div>
    </div>
  </div>
</div>


    );
}

export default How_it_works;