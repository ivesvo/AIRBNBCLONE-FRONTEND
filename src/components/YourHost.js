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
                 <Image style={{width:"130px"}}src={this.props.hostpictureURL} roundedCircle />
                <h6>{this.props.hostname}</h6>
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