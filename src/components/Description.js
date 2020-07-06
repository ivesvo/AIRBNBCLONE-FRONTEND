import React, { Component } from "react";
import { Row, Container, Col, Button, Badge } from "react-bootstrap";
import "./Detail.css";
import YourHost from "./YourHost";
import WhatToBring from "./WhatToBring";
import ExperienceList from "./ExpList";

export class Description extends Component {
  render() {
    return (
      <div>
        <div classname="wat-will-do">
          <Container style={{ marginTop: 100, marginBottom: 100 }}>
            <Row>
              <Col lg={4}>
                <h1>What will you do</h1>
              </Col>
              <Col lg={8}>
                <p>
                  {this.props.description}
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="try-sth-new">
          <Container>
            <Row>
              <Col lg={4} style={{ margin: "100px 0" }}>
                <h1>Try something new together</h1>
              </Col>
              <Col lg={8}>
                <div className="sth-new-item">
                  <div className="new-item">
                    <img
                      width={32}
                      height={32}
                      src="https://a0.muscache.com/pictures/2f1e240c-d383-45e4-b34b-8957d061cb32.jpg
"
                    />
                    <h6>Thoughtful hosts</h6>
                    <p>
                      Get to know hosts who share their expertise and a window
                      to their world.
                    </p>
                  </div>
                  <div className="new-item">
                    <img
                      width={32}
                      height={32}
                      src="https://a0.muscache.com/pictures/6ca44422-9ab4-42d0-94a1-73fff922164e.jpg"
                    />
                    <h6>Small group activities</h6>
                    <p>
                      Meet people from all over the world while learning
                      something new together.
                    </p>
                  </div>
                  <div className="new-item">
                    <img
                      width={32}
                      height={32}
                      src="https://a0.muscache.com/pictures/1ae9646f-4fdc-487a-a6f0-fea0a4a6cc44.jpg"
                    />
                    <h6>Simple and global</h6>
                    <p>
                      Join easily and participate from home without a lot of
                      prep.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <YourHost />
        <WhatToBring />
      </div>
    );
  }
}

export default Description;