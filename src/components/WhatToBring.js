import React, { useState, useEffect } from "react";
import { Row, Container, Col, Button, Badge } from "react-bootstrap";
const WhatToBring = ({ items }) => {
  const [detailExp, setDetailExp] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:5000/exps/update");
    }
  });
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4}>
            <h1>What to bring</h1>
          </Col>
          <Col lg={8}>

            {items.map((item) => {
              return (
                <span>
                  <div className="bring-info">
                  <div className="bring-circle">
                    <i class="far fa-check"></i></div>
                    <div>  {item} </div>
                    
                    </div>
                    
                </span>
              )})}

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhatToBring;