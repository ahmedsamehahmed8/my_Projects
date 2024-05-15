
import'./browse.css'




import { useEffect } from 'react'

import { useState } from 'react';



import Design from './S_browse_topics/design.jsx'

import Markting from './S_browse_topics/markting.jsx'

import Finance from './S_browse_topics/finance.jsx'

import Music from './S_browse_topics/music.jsx'



import Education from './S_browse_topics/education.jsx'




function Browse_topics (props) {
    let [a,seta] = useState('hidden')
    let [b,setb] = useState('hidden')
    let [c,setc] = useState('hidden')
    let [d,setd] = useState('hidden')
    let [e,sete] = useState('hidden')
    
    
    let [display,setdisplay] = useState('design')
    console.log(display)
    

    let pro = display
 
    
 
    
    useEffect (
        ()=>{

            switch (pro){

                case "education":

                seta('hidden')
                setb('hidden')
                setc('hidden')
                setd('hidden')
                sete('visible');
                 
                   break;

                case "music": 

                seta('hidden')
                setb('hidden')
                setc('hidden')
                setd('visible')
                sete('hidden');
              
                    break;
                case "finance":

                seta('hidden')
                setb('hidden')
                setc('visible')
                setd('hidden')
                sete('hidden');
               
                    break;
                case "markting":

                seta('hidden')
                setb('visible')
                setc('hidden')
                setd('hidden')
                sete('hidden');

                    break;
                case "design":

                    seta('visible')
                    setb('hidden')
                    setc('hidden')
                    setd('hidden')
                    sete('hidden');
                    break;

                    
            }
        }
    
    
    ,[pro])





    
    
    return (


        <div ref={props.browse} className='container m-auto flex justify-center items-center flex-col pt-10 pb-5 relative'>
        <p className='text-5xl font-bold'>Browse Topics</p>
          <div className='flex justify-between p-5  md:p-1   w-[70%] h-[90px] '>
            <button onClick={()=>{ setdisplay('design')}} className=' div-btn relative w-[20%] h-[100%] text-xl '>Design
              <div className='absolute bg-black w-[100%] btn left-0 bottom-[0px] h-[2px]'>
              </div>
            </button>
            <button onClick={()=>{ setdisplay('markting')}} className=' div-btn relative w-[20%] h-[100%] text-xl'>Markting
              <div className='absolute bg-black w-[100%] left-0 btn bottom-[0px] h-[2px]'>
              </div>
            </button>
            <button onClick={()=>{ setdisplay('finance')}} className=' div-btn relative w-[20%] h-[100%] text-xl'>Finance
              <div className='absolute bg-black w-[100%] btn left-0 bottom-[0px] h-[2px] '>
              </div>
            </button>
            <button onClick={()=>{ setdisplay('music')}} className=' div-btn   relative w-[20%] h-[100%] text-xl'>Music
              <div className='absolute bg-black w-[100%] btn left-0 bottom-[0px] h-[2px] '>
              </div>
            </button>
            <button onClick={()=>{ setdisplay('education')}} className='div-btn relative w-[20%] h-[100%] text-xl '>Education
              <div className='absolute bg-black w-[100%] btn left-0 bottom-[0px] h-[2px] '>
              </div>
            </button>
          </div>
            <div className='w-[100%] h-[2px] bg-slate-500  mt-[22px]  absolute top-[150px] opacity-50' >
            </div>
  
            <Design className ={a}/>
            <Markting className ={b}/>
            <Finance className ={c}/>
            <Music className ={d}/>
            <Education hh={e}/>


            
        </div>

    );
}

export default Browse_topics ;