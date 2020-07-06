import React, { Component } from "react";
import { Row, Container, Col, Button, Badge } from "react-bootstrap";

export class YourHost extends Component {
  render() {
    return (
      <div className="your-host">
        <Container>
          <Row>
            <Col lg={4}>
              <h1>Your host</h1>
            </Col>
            <Col lg={8}>
              <div></div>
              <div className="host-title">
                <h6>Take A Chef</h6>
                <p>
                  Since 2012, Take a Chef has connected thousands of local chefs
                  and guests in over 100 countries, through private chef
                  experiences at home. Now, we are thrilled to invite some of
                  the best Michelin-starred chefs to your kitchen through a
                  series of interactive online experiences. Learn how to cook
                  some of their emblematic dishes and allow the chefs to guide
                  you through their craft. In this experience, we are excited to
                  present to you Chef Cristina Bowerman. Chef Cristina was born
                  in Cerignola and is the only female chef to be awarded a
                  Michelin Star in Rome. In 2006, Chef Cristina began working at
                  the Glass Hostaria restaurant. Just 4 years in and after
                  dedicating her time in the kitchen to produce modern Italian
                  dishes inspired by tradition, her travels & her unique
                  culinary style, the restaurant earned the prestigious star.
                </p>
              </div>
              <Button className="host-btn">Contact host</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default YourHost;