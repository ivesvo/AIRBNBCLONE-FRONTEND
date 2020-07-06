import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Button, Row} from 'react-bootstrap'



export default function Jumbotron() {
    return (
        <div>
             <div className="jumbotron" style={{
            backgroundImage:`url("https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=838&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F04%2F08%2Fairbnb-virtual-experiences-BNBV0420.jpg")`, 
            backgroundImageWidth: '100vw',
            backgroundSize: "cover"
        }} >
            <Row className="title">
            <Col lg={3}>
                <h1>Online Experiences</h1>
                <h4>Unique activities to do from home, including cooking experiences with world-renowned chefs</h4>
            </Col>
            {/* <Col lg={4}><h4>Unique activities to do from home, including cooking experiences with world-renowned chefs</h4></Col> */}
            </Row>
           
        </div>
            

        <div className="tags">
            <Col>
            <Button className="btn" variant="light">Date</Button>
            <Button variant="light">Time of The Day</Button>
            <Button variant="light">Price</Button>
            <Button variant="light">Language Offered</Button>
            </Col>
            
            <Col>
            <Button variant="light">Great For Groups +</Button>
            <Button variant="light">Family Friendly +</Button>
            <Button variant="light">Animals +</Button>
            <Button variant="light">Arts & Writing +</Button>
            <Button variant="light">Cooking +</Button>
            <Button variant="light">Dancing +</Button>
            </Col>
        </div>

        </div>
       
            
        
    )
}

