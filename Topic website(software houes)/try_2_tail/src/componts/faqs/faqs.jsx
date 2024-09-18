import iimg from '../../images/faq_graphic.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown,faAngleUp } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react';
import { useEffect } from 'react';

function Faqs(props) {
    

    let [display,setdisplay] = useState(0)
    let [block1,setblock1] = useState('hidden')
    let [block2,setblock2] = useState('hidden')
    let [block3,setblock3] = useState('hidden')

    
    let [icon1_up,seticon1_up] = useState('hidden')
    let [icon2_up,seticon2_up] = useState('hidden')
    let [icon3_up,seticon3_up] = useState('hidden')

    let [icon1_down,seticon1_down] = useState('block')
    let [icon2_down,seticon2_down] = useState('block')
    let [icon3_down,seticon3_down] = useState('block')



    let [bg1,setbg1] = useState('')
    let [bg2,setbg2] = useState('')
    let [bg3,setbg3] = useState('')



    console.log(display)
    
    useEffect(

        ( )=>{

            
            switch(display){



                case 1:
                setblock1("block")
                setblock2("hidden")
                setblock3("hidden")

                seticon1_up("block")
                seticon1_down("hidden")
                seticon2_down("block")
                seticon3_down("block")
                seticon2_up("hidden")
                seticon3_up("hidden")

                setbg1('bg-blue-200 text-blue-900')
                setbg2('')
                setbg3('')


                break;
                
                case 2:

                setblock1("hidden")
                setblock2("block")
                setblock3("hidden")     
                
                seticon2_up("block")
                seticon1_up("hidden")
                seticon3_up("hidden")
                seticon2_down("hidden")
                seticon1_down("block")
                seticon3_down("block")


                setbg1('')
                setbg2('bg-blue-200 text-blue-900')
                setbg3('')
                break;
                
                case 3:

                setblock1("hidden") 
                setblock2("hidden") 
                setblock3("block")

                seticon3_up("block")
                seticon2_up("hidden")
                seticon1_up("hidden")
                seticon3_down("hidden")
                seticon1_down("block")
                seticon2_down("block")


                setbg1('')
                setbg2('')
                setbg3('bg-blue-200 text-blue-900')
                
                break;



                
            }

            
            
        
        },[display])




    return ( 

        <div className='container p-6 mt-10' ref={props.faqs}>

    <div className=' Frequently Asked Questions flex   flex-wrap  '>
    <div className='flex  flex-col lg:w-[50%]'>
      <p className='text-6xl font-bold '>Frequently Asked Questions</p>
      <img src={iimg} className="p-16 w-[100%]" />

    </div>


    <div className=' lg:w-[50%] w-[100%] gap-7 flex flex-col items-center justify-center p-5'>
      <div onClick={()=>{ setdisplay(1) }} className={` duration-1000 w-[100%] flex justify-between cursor-pointer rounded-full p-2 ${bg1}`}>
<button  className=' text-2xl font-bold p-2'>What is Topic Listing?</button>
<div className='flex h-[100%] items-center'>

<FontAwesomeIcon className={`p-3  ${icon1_down}`} icon={faChevronDown} />
<FontAwesomeIcon className={`p-3 ${icon1_up}`} size='lg' icon={faAngleUp} />
</div>

      </div>
      <div className={ `${block1} duration-1000   w-[100%] h-[200px] flex justify-center   `}>
        <p className=' w-[90%] text-2xl  duration-1000'>Topic Listing is free Bootstrap 5 CSS template. You are not allowed to redistribute this template on any other template collection website without our permission. Please contact TemplateMo for more detail. Thank you.</p>
      </div>
      <div onClick={()=>{ setdisplay(2) }} className={`duration-1000  w-[100%] flex justify-between cursor-pointer rounded-full p-2 ${bg2}`}>
<button  className='text-2xl font-bold p-2'>How to find a topic?</button>
<div className='flex h-[100%] items-center'>

<FontAwesomeIcon className={`p-3 ${icon2_down}`} icon={faChevronDown} />
<FontAwesomeIcon className={`p-3 ${icon2_up}`}  size='lg' icon={faAngleUp} />
</div>
      </div>

      <div className={ `${block2} w-[100%] h-[200px] flex justify-center  `}>
        <p className='w-[90%] text-2xl'>Topic Listing is free Bootstrap 5 CSS template. You are not allowed to redistribute this template on any other template collection website without our permission. Please contact TemplateMo for more detail. Thank you.</p>
      </div>

      <div onClick={()=>{ setdisplay(3) }} className={`duration-1000  w-[100%] flex justify-between cursor-pointer rounded-full p-2 ${bg3}`}>
<button  className='text-2xl font-bold p-2'>Does it need to paid?</button>
<div className='flex h-[100%] items-center'>

<FontAwesomeIcon className={`p-3 ${icon3_down}`} icon={faChevronDown} />
<FontAwesomeIcon className={`p-3 ${icon3_up}`} size='lg' icon={faAngleUp} />
</div>
      </div>

      <div className={ `${block3} w-[100%] h-[200px]  flex justify-center `}>
        <p className='w-[90%] text-2xl'>Topic Listing is free Bootstrap 5 CSS template. You are not allowed to redistribute this template on any other template collection website without our permission. Please contact TemplateMo for more detail. Thank you.</p>
      </div>

    </div>
</div>

    </div>




    );
}

export default Faqs;