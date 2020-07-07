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
                <h1 className="h1-title">Online Experiences</h1>
                <h4>Unique activities to do from home, including cooking experiences with world-renowned chefs</h4>
            </Col>
        
            </Row>
           
        </div>
            

        
        </div>
       
            
        
    )
}

