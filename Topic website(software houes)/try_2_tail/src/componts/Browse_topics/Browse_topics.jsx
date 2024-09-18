
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
                sete('visible active:bg-red-600');
                 
                   break;

                case "music": 

                seta('hidden')
                setb('hidden')
                setc('hidden')
                setd('visible active:bg-red-600')
                sete('hidden');
              
                    break;
                case "finance":

                seta('hidden')
                setb('hidden')
                setc('visible active:')
                setd('hidden')
                sete('hidden');
               
                    break;
                case "markting":

                seta('hidden')
                setb('visible active:')
                setc('hidden')
                setd('hidden')
                sete('hidden');

                    break;
                case "design":

                    seta('visible active:')
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
          <div className='flex justify-center p-5  md:p-10 relative '>
            <button onClick={()=>{ setdisplay('design')}} className=' btn pe-6 md:pe-20 md:text-xl text-base '>Design
              <div className='div-btn '>
              </div>
            </button>
            <button onClick={()=>{ setdisplay('markting')}} className=' btn pe-6 md:pe-20 md:text-xl text-base'>Markting
              <div className='div-btn'>
              </div>
            </button>
            <button onClick={()=>{ setdisplay('finance')}} className=' btn pe-6 md:pe-20 md:text-xl text-base'>Finance
              <div className='div-btn '>
              </div>
            </button>
            <button onClick={()=>{ setdisplay('music')}} className='  btn pe-6 md:pe-20 md:text-xl text-base '>Music
              <div className='div-btn '>
              </div>
            </button>
            <button onClick={()=>{ setdisplay('education')}} className=' btn md:text-xl text-base '>Education
              <div className='div-btn '>
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