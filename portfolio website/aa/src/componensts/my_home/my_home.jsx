
import bkimage from '../../assets/images/home-bg.jpg'
import{ useTypewriter,Cursor } from 'react-simple-typewriter'
import  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import './my_home.css'
import { useRef } from 'react';


function My_home() {
    let [x] = useTypewriter({
        words: ['Download, edit and apply this awesome template for your websites','Hello, this is Type.js','Awesome Template is provided by templatemo.com website for everyone'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40,
    })
    

    
    
    return (    
    <>

        <img src={bkimage} className="img " />
    <div  className='container  '>
        <div className='aaa'>
        <h1 className='aa d-sm-block  '>
            we make templates<br/>that are 
                <span>
                    awesome
                </span>
                <br/>
            <p className='type '>
                {x} <Cursor/>
            </p>
        </h1>
        <Button className='bttn' variant="outline-light">GET STARTED </Button>
    
    </div>
    </div>
    </>

    );
}

export default My_home;