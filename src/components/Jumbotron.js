import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Button, Row} from 'react-bootstrap'



export default function Jumbotron() {
    return (
        <div>
             <div className="jumbotron" style={{
            backgroundImage:`url("https://static01.nyt.com/images/2019/01/07/smarter-living/family-technology-guide-slide-68E2/family-technology-guide-slide-68E2-jumbo-v2.gif")`, 
            backgroundImageWidth: '100vw',
            
            
            backgroundSize: "90%"
        }} >
            <Row className="title">
            <Col lg={3}>
                <h1 className="h1-title">Online Experiences</h1>
                <h4>Unique activities to do from home, including cooking experiences with world-renowned chefs</h4>
            </Col>
        
            </Row>
           
        </div>
            

        
        </div>
       
            
        
    )
}

