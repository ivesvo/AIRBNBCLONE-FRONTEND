import React, { Component } from "react";
import { Row, Container, Col, Button, Badge, Image } from "react-bootstrap";

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
                 <Image style={{width:"130px"}}src="https://i.pinimg.com/originals/84/96/ca/8496ca85ecfc7a2be6c0b1b649652578.jpg" roundedCircle />
                <h6>Take A Chef</h6>
                <p>
                 {this.props.description}
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