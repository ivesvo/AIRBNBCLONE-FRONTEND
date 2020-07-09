import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button, Form, FormControl, Navbar, Col, Modal } from 'react-bootstrap'
import { Link } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import NewExp from './NewExp'


export default function Navigation({user,loaded,fbLogin}) {
    let [show,setShow] = useState(false)
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // useEffect = () => {

    // }
    
    if (!loaded) return <h1>Loading...</h1>
    return (
        <div>
            <>

                <Navbar className="nav1" style={{ display: "flex", "justifyContent": "space-between" }}>

                    <Navbar.Brand href="#home"><img style={{ marginLeft: "30px" }} alt="logo" width="130" src="https://japanesquest.com/wp-content/uploads/2017/10/airbnb-logo.png" /></Navbar.Brand>

                    <Nav className="nav">

                        <Navbar.Text><Link to='/addexp'>Host An Experience</Link></Navbar.Text>

                        <Nav.Link href="#features">Help</Nav.Link>
                        {/* {!user
                            ? <Navbar.Text><Link to="/login" onClick={() => setShow(show)}>Log In</Link></Navbar.Text>
                            : <Navbar.Text > <Link to="/login" onClick={() => logout()}>Log Out</Link></Navbar.Text>

                        } */}
                         <Navbar.Text><Link to="/login" onClick={() => setShow(show)}>Log In</Link></Navbar.Text>

                        <Navbar.Text><Link onClick={() => setShow(true)}>Log In</Link></Navbar.Text>

                        <Navbar.Text><Link to="/me">Profile</Link></Navbar.Text>

                    </Nav>



                </Navbar>


                <Modal show={show} onHide={() => setShow(!show)}>
                    <h1>Log in with Facebook</h1>

                    <FacebookLogin
                        appId="274983090404652"
                        autoLoad={false}
                        fields="name,email,picture"
                        // onClick={componentClicked}
                        callback={fbLogin} />

                </Modal>

            </>
        </div >
    )
}
