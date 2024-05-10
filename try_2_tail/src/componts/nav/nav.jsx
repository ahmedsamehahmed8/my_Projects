import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone,faUser,faCaretDown,faBars } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react';
import { useEffect } from 'react';
import './nav.css'
import { Link } from 'react-router-dom';


function Nav(props) {

    let [pagev,setpagev] = useState(-1)

    const [visable , setvistable]= useState(-1);

    function clickpagev(){
let a 
if(pagev===1){
    a='visible'
    }else{
    a='invisible'
    }
    return a
}


    


function Handelclick (){
let z
if(visable===1){
z='visible'
}else{
z='invisible'
}
return z
}
    return ( 
    
        <>
      

    <nav className=' sticky  top-0 border-b-2 w-[100%] h-24 bg-teal-400 flex justify-around p-9 z-20'>
      <Link to={'/'} className='flex '>
        <FontAwesomeIcon className='p-1' icon={faClone} rotation={90} size="2xl" style={{color: "#000000",}} />
        <p className='text-3xl font-bold'>
        Topic
        </p>
      </Link>


      <div className='invisible lg:visible ' >
        <button onClick={()=>{ props.home.current.scrollIntoView({block:"center", behavior:'smooth' })}}  href="" className='p-2 text-xl me-4 font-bold text-white hover:text-cyan-800'> <Link to={'/'}>HOME</Link>  </button>
        <button onClick={()=>{ props.browse.current.scrollIntoView({block:"center", behavior:'smooth' })}} href="" className='p-2 text-xl me-4 font-bold text-white hover:text-cyan-800'><Link to={'/'}>BROWES TOPICS</Link>   </button>
        <button onClick={()=>{ props.hiw.current.scrollIntoView({block:"center", behavior:'smooth' })}} href="" className='p-2 text-xl me-4 font-bold text-white hover:text-cyan-800'><Link to={'/'}>HOW IT WORKS</Link>    </button>
        <button onClick={()=>{ props.faqs.current.scrollIntoView({block:"center", behavior:'smooth' })}} href="" className='p-2 text-xl me-4 font-bold text-white hover:text-cyan-800'><Link to={'/'}>FAQS</Link>  </button>
        <button onClick={()=>{ props.contact.current.scrollIntoView({block:"center", behavior:'smooth' })}} href="" className='p-2 text-xl me-4 font-bold text-white hover:text-cyan-800'><Link to={'/'}> CONTACT </Link>  </button>
        <button onClick={()=>{setpagev(-pagev)}}  className='p-2 text-xl btn relative font-bold text-white hover:text-cyan-800 '>
                page <FontAwesomeIcon className='icon' icon={faCaretDown}  /> 
            <div className={`${clickpagev()}  absolute z-20 top-[45px] left-0 w-48 h-20  rounded-xl bg-white flex flex-col justify-center items-center` }>
                <Link to={'/q'} className=' text-lg text-black mb-2'>TOPICS LISTING </Link>
                <Link to={'/contact'} className='text-lg text-black'> CONTACT FORM </Link>
            </div>
        </button>
            </div>
            <div className='visible lg:invisible  '>
                <button className='mt-2 mr-5' onClick={()=>{setvistable(-visable) }}>
                <FontAwesomeIcon size='xl' icon={faBars} />
            <div className={`${Handelclick()}  absolute left-0 w-[100%] h-[320px] bg-teal-400 mt-2 flex flex-col  p-5  `}>
                    <button onClick={()=>{ props.home.current.scrollIntoView({block:"center", behavior:'smooth' })}} href="" className=' w-[100%] text-left  text-xl p-2 font-bold text-white hover:text-cyan-800'><Link to={'/'}>HOME </Link>  </button>
                    <button onClick={()=>{ props.browse.current.scrollIntoView({block:"center", behavior:'smooth' })}} href="" className='text-left  text-xl p-2 font-bold text-white hover:text-cyan-800'><Link to={'/'}>BROWES TOPICS</Link>  </button>
                    <button onClick={()=>{ props.hiw.current.scrollIntoView({block:"center", behavior:'smooth' })}} href="" className='text-left text-xl p-2 font-bold text-white hover:text-cyan-800'><Link to={'/'}>HOW IT WORKS</Link>  </button>
                    <button onClick={()=>{ props.faqs.current.scrollIntoView({block:"center", behavior:'smooth' })}} href="" className='text-left text-xl p-2 font-bold text-white hover:text-cyan-800'><Link to={'/'}>FAQS</Link>  </button>
                    <button onClick={()=>{ props.contact.current.scrollIntoView({block:"center", behavior:'smooth' })}} href="" className='text-left text-xl p-2 font-bold text-white hover:text-cyan-800'><Link to={'/'}>CONTACT</Link>  </button>
                    <button  className='pb-10 btn text-left text-xl p-2 font-bold text-white hover:text-cyan-800 '>
                    page <FontAwesomeIcon className='icon' icon={faCaretDown} /> 
                    <div className=' win absolute bottom-[-50px] left-[-5px] w-48 h-20 bg-white flex flex-col justify-center items-center rounded-3xl '>
                    <Link to={'/q'} className='mb-2 text-lg text-black'>TOPICS LISTING </Link>
                    <Link to={'/contact'} className=' text-lg text-black'> CONTACT FORM </Link>
                    </div>
                    </button>
                </div>
                </button>
            </div>



    <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>
    <FontAwesomeIcon className='p-3' size="lg" icon={faUser} />
    </div>
    </nav>
        </>

    );
}

export default Nav;