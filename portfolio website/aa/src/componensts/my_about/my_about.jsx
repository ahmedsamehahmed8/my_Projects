
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton,faComment} from '@fortawesome/free-solid-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./my_about.css"

import  Card  from 'react-bootstrap/Card';





function My_about() {
    return ( 

        <div className=' container-fluid all '>
          <div className='container p-5 mb-5'>

  <div className='row zzz '>
    <div className='col text-center p-5 display-4 text-white'>
      WE ARE <span className='fw-bold span' > AWESOME</span> 
    </div>
  </div>

    <div className='row  mt-5  '>
      <div className='col-md-4 row  '>
      <Card className='card-bkk zzz'>
        <Card.Header className='d-flex  card-bkk'>
        <FontAwesomeIcon icon={faMobileScreenButton} size="lg" style={{color: "#ffffff",}}  className='border p-3 border border-light rounded-1'/>
        <p className=' ms-3  align-self-end text-white'>FULLY RESPONSIVE</p>
        </Card.Header>
        <Card.Body >
        <p className='pp  text-white'>Awesome responsive template is provided by templatemo website. This is Bootstrap v3.3.2 layout built on HTML5 CSS3. You can use this for any purpose. Please tell your friends about it.</p>
        </Card.Body>
      </Card>
        </div>


        <div className='col-md-4 row '>
      <Card className='card-bkk zzz'>
        <Card.Header className='d-flex card-bkk'>
        <FontAwesomeIcon icon={faComment} size="lg" style={{color: "#ffffff",}}   className='border p-3 border border-light rounded-1'/>
          <p className='ms-3 align-self-end text-white'>FREE SUPPORT</p>
        </Card.Header>
        <Card.Body>
        <p className='pp text-white'>Credits go to Pixabay for homepage image and Unsplash for portfolio images. Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</p>        </Card.Body>
      </Card>
        </div>


        <div className='col-md-4  row '>
      <Card className='card-bkk zzz'>
        <Card.Header className='d-flex card-bkk'>
        <FontAwesomeIcon icon={faHtml5} size="lg" style={{color: "#ffffff",}}  className='border p-3 border border-light rounded-1'/>
          <p className='ms-3 align-self-end text-white'>HTML5 & CSS3</p>
        </Card.Header>
        <Card.Body>
        <p className='pp text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet.</p>
        </Card.Body>
      </Card>
        </div>


    </div>
</div>

          </div>


    );
}

export default My_about;