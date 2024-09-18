

import  'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faLocationDot,faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'
import { faInstagram,faTwitter,faFacebookF } from '@fortawesome/free-brands-svg-icons'

import  Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "./my_contact.css"



function My_contact() {
    
  
  
  
  return ( 

        <>
        
        <div className='bg_con container-fluid'>
        <div className='row zzz '>
          <div className='col  text-center p-5 display-5 text-white'>CONTACT <span className=''>AWESOME</span>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-row p-1 zzz '>
              <Form className='p-1 '>
                <Form.Group className='p-2' >
                  <Form.Label  className='text-white'>NAME</Form.Label>
                  <Form.Control className='text_aria p-2' type='text'></Form.Control>
                </Form.Group>
                <Form.Group className='p-2'>
                  <Form.Label className='text-white'>Email</Form.Label>
                  <Form.Control className='text_aria' type='text'></Form.Control>
                </Form.Group>
                <Form.Group className='p-2'>
                  <Form.Label className='text-white'>MESSAGE</Form.Label>
                  <Form.Control className='text_aria ' as="textarea"  rows={3}></Form.Control>
                </Form.Group>
                <Form.Group className='p-2'>
                  <Button className='p-3 w-100 mt-4 '>Submit</Button>
                </Form.Group>
              </Form>
            </div>
            <div className='col-md-6 col-row p-2 zzz'>
              <h4 className='text-white fw-bold p-2 '>OUR ADDRESS</h4>
              <p className='text-white p-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</p>
              <div className='d-flex p-2  '>
              <FontAwesomeIcon className='border border-1 p-3' icon={faPhone} size="sm" style={{color: "#ffffff",}}/>
              <p className='ms-3 text-white'> 010-020-0340 </p>
              </div>

              <div className='d-flex p-2  '>
              <FontAwesomeIcon className='border border-1 p-3 ' icon={faEnvelope} size="sm" style={{color: "#ffffff",}} />
              <p className='ms-3  text-white'>  awesome@company.com</p>
              </div>

              <div className='d-flex p-2  '>
              <FontAwesomeIcon className='border border-1 p-3 ' icon={faLocationDot} size="sm" style={{color: "#ffffff",}} />
              <p className='ms-3 text-white '> 663 New Walk Roadside, Birdeye View, GO 11020</p>
              </div>
              <hr className='text-white' />
              <div className='col-xl-6  col-9 d-flex justify-content-between align-items-center pb-5 '>
                <p className='text-white '> WE ARE SOCIAL</p>
                <FontAwesomeIcon className='border border-1 p-3 ' icon={faFacebookF} size="sm" style={{color: "#ffffff",}} />
                <FontAwesomeIcon className='border border-1 p-3 ' icon={faTwitter} size="sm" style={{color: "#ffffff",}} />
                <FontAwesomeIcon className='border border-1 p-3 ' icon={faInstagram} size="sm" style={{color: "#ffffff",}} />
              </div>
              
              
            
            
            </div>
          </div>
        </div>
      </div>
        
        </>
        




    );
}

export default My_contact;