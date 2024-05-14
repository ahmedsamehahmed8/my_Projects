
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  Card  from 'react-bootstrap/Card';
import {  faGear,faCloud,faLaptop} from '@fortawesome/free-solid-svg-icons'
import './my_service.css'





function My_service() {
    return ( 
        
        <div className='container'>
        <div className='row zzz'>
            <div className='col text-center p-5 display-4 text-white'>OUR 
                <span className='span fw-bold '> AWESOME </span>THINGS
        </div>
            </div>
            <div className='row'>
                
                    <Card className='servic-bk col-lg-4 zzz p-4 mt-2 '>
                        <Card.Header className='servic-bkk' >
                            <FontAwesomeIcon className='p-4 border border-2 ' icon={faLaptop} size="2xl" style={{color: "#ffffff",}} />
                            <Card.Title className='fs-5 fw-bold span mt-3'>Web Design</Card.Title>
                        </Card.Header>
                        <Card.Body className='text-white '>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.
                        </Card.Body>
                    </Card>
                

                    <Card className='servic-bk-mid p-4 mt-2 col-lg-4 zzz'>
                        <Card.Header className='servic-bkk-mid' >
                            <FontAwesomeIcon className='p-4 border border-2 ' icon={faCloud} size="2xl" style={{color: "#ffffff",}} />                
                            <Card.Title className='fs-5 fw-bold span mt-3'>Cloud Computing</Card.Title>
                        </Card.Header>
                        <Card.Body className='text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.
                        </Card.Body>
                    </Card>
                

                        <Card className='servic-bk col-lg-4 zzz p-4 mt-2'>
                            <Card.Header className='servic-bkk'>
                                <FontAwesomeIcon className='p-4 border border-2 ' icon={faGear} size="2xl" style={{color: "#ffffff",}} />                
                                <Card.Title className='fs-5 fw-bold span mt-3'>UX Design</Card.Title>
                            </Card.Header >
                            <Card.Body className='text-white'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.
                            </Card.Body>
                        </Card>
                    
                </div>
        </div>

    );
}

export default My_service;