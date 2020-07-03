import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button, Form, FormControl, Navbar, Col } from 'react-bootstrap'
import NewExp from './NewExp'


export default function Navigation() {
    return (
        <div>
            <>

                <Navbar className="nav1" style={{display:"flex","justifyContent":"space-between"}}>

                    <Navbar.Brand href="#home"><img style={{marginLeft:"30px"}} alt="logo" width="130" src="https://japanesquest.com/wp-content/uploads/2017/10/airbnb-logo.png" /></Navbar.Brand>

                    <Nav className="nav">
                        
                        <Nav.Link href="/addexp">Host An Experience</Nav.Link>
                        <Nav.Link href="#features">Help</Nav.Link>
                        <Nav.Link href="#features">Log In</Nav.Link>
                        <Nav.Link href="#features">Sign Up</Nav.Link>

                    </Nav>



                </Navbar>
            </>
        </div>
    )
}
