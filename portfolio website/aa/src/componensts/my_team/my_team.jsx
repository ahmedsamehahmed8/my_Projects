import  Card  from 'react-bootstrap/Card';

import team1 from '../../assets/images/team-img1.jpg'
import team2 from '../../assets/images/team-img2.jpg'
import team3 from '../../assets/images/team-img3.jpg'
import team4 from '../../assets/images/team-img4.jpg'

import './my_team.css'




function My_team() {
    return ( 

        <div className='container'>
      <div className='row p-5 zzz'>
        <div className='col text-center p-5 display-4 text-white '>
          <span className='fw-bold span' > AWESOME</span> TEAM
        </div> 
      </div>

      <div className='container'>
      <div className='row'>
        <div className='col-lg-3 col-sm-6 mt-3 zzz'>
          <Card className='card-bk '>
            <Card.Img className='card_img' src={team1}></Card.Img>
            <Card.Header className='qq pt-3 text-white'>TRACY
            <Card.Title className='fs-6 fw-bold text-primary'>Designer</Card.Title>
            </Card.Header>
            
            <Card.Body className='text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.
            </Card.Body>
            </Card>
        </div>

        <div className='col-lg-3 col-sm-6 mt-3 zzz'>
          <Card className='card-bk '>
            <Card.Img className='card_img' src={team2} ></Card.Img>
            <Card.Header className='qq pt-3 text-white'>MARY
            <Card.Title className='fs-6 fw-bold text-primary'>Developer</Card.Title>
            </Card.Header>
            
            <Card.Body className='text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.
            </Card.Body>

          </Card>
        

        </div>

        <div className='col-lg-3 col-sm-6 mt-3 zzz'>
          <Card className='card-bk '>
            <Card.Img className='card_img' src={team3}></Card.Img>
            <Card.Header className='qq pt-3 text-white'>JULIA
            <Card.Title className='fs-6 fw-bold text-primary'>Director</Card.Title>
            </Card.Header>
            
            <Card.Body className='text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.
            </Card.Body>

          </Card>
        

        </div>

        <div className='col-lg-3 col-sm-6 mt-3 zzz'>
          <Card className='card-bk '>
            <Card.Img className='card_img' src={team4}></Card.Img>
            <Card.Header className='qq pt-3 text-white'>LINDA
            <Card.Title className='fs-6 fw-bold text-primary'>Manage</Card.Title>
            </Card.Header>
            
            <Card.Body className='text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.
            </Card.Body>

          </Card>
        

        </div>

      </div>
      </div>
    </div>

    );
}

export default My_team;