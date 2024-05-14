
import por1 from '../../assets/images/por-img1.jpg'
import por2 from '../../assets/images/por-img2.jpg'
import por3 from '../../assets/images/por-img3.jpg'
import por4 from '../../assets/images/por-img4.jpg'

import './my_portfolio.css'

import  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





function My_portfolio () {
    return (

        <div className="container mb-5">
            <div className='row  container zzz'>
          <div className='col text-center p-5 display-4 text-white'>
            <span className="span fw-bold">AWESOME </span>PORTFOLIO
          </div>
        </div>
        <div className='container'>
          <div className='row  container '>
            <div className='container col-lg-3 col-md-6 p-0 zzz'>
              <div className=' col-lg-3 col-md-6  col p-0 ee  '>
                <img src={por1} className='img-fluid '/>
                <div className='ppp text-white '>
                  <div className='container p-3 '>
                    <h5>Project one</h5>
                    <p className='lh-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                    <button className='btn btn-outline-light btn-sm'>DETALES</button>
                  </div>
                </div>
              </div>
            </div>
              <div className='container col-lg-3 col-md-6 zzz  p-0'>
                <div className='col-lg-3 col-md-6 p-0 ee '>
                  <img src={por2} className='img-fluid '/>
                  <div className='ppp text-white'>
                    <div className='container p-3'>
                      <h5>Project two</h5>
                      <p className='lh-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                      <button className='btn btn-outline-light btn-sm'>DETALES</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container col-lg-3 col-md-6  zzz p-0'>
                <div className='col-lg-3 col-md-6 p-0 ee '>
                  <img src={por3} className='img-fluid '/>
                  <div className='ppp text-white'>
                    <div className='container p-3'>
                      <h5>Project Three</h5>
                      <p className='lh-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                      <button className='btn btn-outline-light btn-sm'>DETALES</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container col-lg-3 col-md-6 zzz  p-0'>
                <div className='col-lg-3 col-md-6 p-0 ee '>
                  <img src={por4} className='img-fluid '/>
                  <div className='ppp text-white'>
                    <div className='container p-3'>
                      <h5>Project Four</h5>
                      <p className='lh-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                      <button className='btn btn-outline-light btn-sm'>DETALES</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className='container'>
          <div className='row container'>
            <div className='container col-lg-3 col-md-6 zzz p-0'>
              <div className='col-lg-3 col-md-6 p-0 ee '>
                <img src={por3} className='img-fluid '/>
                <div className='ppp text-white'>
                  <div className='container p-3'>
                    <h5>Project Five</h5>
                    <p className='lh-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                    <button className='btn btn-outline-light btn-sm'>DETALES</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='container col-lg-3 col-md-6 zzz p-0'>
              <div className='col-lg-3 col-md-6 p-0 ee '>
                <img src={por4} className='img-fluid '/>
                <div className='ppp text-white'>
                  <div className='container p-3'>
                    <h5>Project Six</h5>
                    <p className='lh-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                    <button className='btn btn-outline-light btn-sm'>DETALES</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='container col-lg-3 col-md-6 zzz  p-0'>
              <div className='col-lg-3 col-md-6 p-0 ee '>
                <img src={por1} className='img-fluid '/>
                <div className='ppp text-white'>
                  <div className='container p-3'>
                    <h5>Project Seven</h5>
                    <p className='lh-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                    <button className='btn btn-outline-light btn-sm'>DETALES</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='container col-lg-3 col-md-6 zzz  p-0'>
              <div className='col-lg-3 col-md-6 p-0 ee '>
                <img src={por2} className='img-fluid '/>
                <div className='ppp text-white'>
                  <div className='container p-3'>
                    <h5>Project Eight</h5>
                    <p className='lh-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                    <button className='btn btn-outline-light btn-sm'>DETALES</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
    );
}

export default My_portfolio;