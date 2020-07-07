import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button, Form, FormControl, Navbar, Col } from 'react-bootstrap'
import NewExp from './NewExp'


export default function Navigation() {
    return (
        <div>
            <>

                <Navbar className="nav2" style={{ display: "flex", "justifyContent": "space-between" }}>

                    <Navbar.Brand href="/"><img style={{ marginLeft: "30px" }} alt="logo" width="130" src="https://japanesquest.com/wp-content/uploads/2017/10/airbnb-logo.png" /></Navbar.Brand>
                    <Col lg={7} md={7} sm={7}>
                        <div className="fix-input">
                            <i
                                className="far fa-search"
                                style={{
                                    color: "white",
                                    marginTop: 35,
                                    position: "absolute",
                                    marginRight: 0,
                                    marginLeft: -80
                                }}
                            ></i>
                            <input
                                type="text"
                                placeholder="              Add a location"
                                class="input-detail"
                            />
                        </div>
                    </Col>
                    <Nav className="nav">
                        <div className="dropdown">
                            <Button className="dropbtn">
                                <i class="fas fa-globe"></i>
                                <i class="fas fa-angle-down"></i>
                            </Button>
                            <div class="dropdown-content">
                                <a href="#">English</a>
                                <a href="#">Vietnamese</a>

                            </div>
                        </div>


                        <Nav.Link href="#features">Help</Nav.Link>

                        <Nav.Link href="#features">Sign Up</Nav.Link>

                    </Nav>



                </Navbar>
            </>
        </div>
    )
}
