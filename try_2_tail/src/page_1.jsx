import { useRef, useState } from 'react'
import './App.css'
import Nav from './componts/nav/nav.jsx'
import Home from './componts/home/home.jsx'
import Browse from './componts/Browse_topics/Browse_topics.jsx'
import How_it_works from './componts/how_it_works/how_it_works.jsx'
import Faqs from './componts/faqs/faqs.jsx'
import Contact from './componts/contact/contact.jsx'
import Footer from './componts/footer/footer.jsx'

import  cardimg1 from"./images/topics/undraw_Remote_design_team_re_urdx.png"
import  cardimg2 from"./images/topics/undraw_Redesign_feedback_re_jvm0.png"
import  cardimg3 from"./images/topics/colleagues-working-cozy-office-medium-shot.png"
import imgg from './images/colleagues-working-cozy-office-medium-shot.jpg'
 import iimg from './images/faq_graphic.jpg'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone,faCaretDown  } from '@fortawesome/free-solid-svg-icons'
import {faBookmark} from '@fortawesome/free-regular-svg-icons'

import { faTwitter,faFacebook,faPinterest  } from '@fortawesome/free-brands-svg-icons'





import { BrowserRouter, Routes, Route } from "react-router-dom";





function Page_1() {
        let home = useRef()
        let browse = useRef()
        let hiw = useRef()
        let faqs = useRef()
        let contact = useRef()
      
        
        return (
          <>
          
      
          <div className=' absolute bg-gradient-to-tr from-cyan-800 to-cyan-200 w-[100%] h-100 ' >
          </div>
            <Nav home={home}  browse={browse}  hiw={hiw}  faqs={faqs}  contact={contact}/>
          <div className="bg-teal-400 w-[100%]  h-[1350px] lg:h-[1000px] rounded-[100px]  ">
            <Home home = {home}/>
          </div>
          <Browse browse ={browse}/>
          <How_it_works hiw={hiw}/>
          <Faqs faqs = {faqs}/>
          <Contact contact={contact}/>
          <Footer/>
      </>
        


    );
}

export default Page_1;