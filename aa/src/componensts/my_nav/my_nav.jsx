import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Offcanvas, Collapse, Dropdown, DropdownButton, DropdownItem, DropdownMenu, DropdownToggle, Navbar, NavbarCollapse, Nav, } from 'react-bootstrap';
import './my_nav.css'


// import reefhome from './my_home.jsx'


function My_nav(props) {

let homee = props.home;
 let about = props.about;


 let omhomeclick = ()=>{
    homee.current.scrollIntoView();
 }

    return ( 
    <>
    <div className='bg-white sticky-top'>
        <Navbar className=' container-md d-flex  justify-content-between  '>
            
            <Nav.Link className='ss nav_bard'>Awesome</Nav.Link>
            
                <Nav className=' d-md-flex  d-none ms-5 '>
                
                    <Nav.Link  className='ss ms-5 p-1' ref={homee}>HOME </Nav.Link>
                    <Nav.Link className='ss ms-3 p-1' ref={about}>ABOUT </Nav.Link>               
                    <Nav.Link className='ss ms-3 p-1'>TEAM </Nav.Link>
                    <Nav.Link className='ss ms-3 p-1'>SERVICE</Nav.Link>
                    <Nav.Link className='ss ms-3 p-1'>PORTOFOLIO</Nav.Link>
                    <Nav.Link className='ss ms-3 p-1'>CONTACT</Nav.Link>
                </Nav>
            
            <Dropdown  className=' d-sm-block d-md-none'>
                <Dropdown.Toggle className='icon '  >
                    <FontAwesomeIcon icon={faBars} size="xl" style={{color: "#91989c",}} />   
                </Dropdown.Toggle>
                <Dropdown.Menu className='dropdown-menu-end dropdown-menu-start ddm container' >
                    <Dropdown.Item  href="#/action-1">HOME</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">ABOUT</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">TEAM</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">SERVICE</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">PORTOFOLIO</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">CONTACT</Dropdown.Item>
                    
                </Dropdown.Menu>
            </Dropdown>
        </Navbar>
                {/* <Offcanvas show={show} onHide={handleClose} placement="top" className="mt-5">
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas> */}
    </div>
    </>
    );
}

export default My_nav 