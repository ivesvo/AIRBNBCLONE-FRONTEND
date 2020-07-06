import React, { Component } from "react";
import { Row, Container, Col, Button, Badge } from "react-bootstrap";
import "./detailExp.css";
import YourHost from "./YourHost";
import WhatToBring from "./WhatToBring";
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
                  Chef Cristina Bowerman is not your typical Italian chef.
                  You're about to meet the woman that revolutionized (and
                  modernized) Roman haute cuisine herself! Her cooking style
                  opens up a conversation between modernity and tradition; she
                  has figured out a way of mixing her background as a designer,
                  and her travels around the world in order to bring back to
                  Rome a fresher, funkier and funnier approach to the Roman
                  traditional cuisine that she so deeply loves at Glass
                  Hostaria. In her first Online Experience, you will get the
                  opportunity to watch, learn, and connect with Chef Cristina as
                  she takes you on an unconventional culinary journey to the
                  heart of Trastevere! In this Masterclass, you will not only
                  get to discover the inspirations and techniques behind her
                  widely recognized signature dishes, but you will also be able
                  to learn how to recreate these original Southern Italian
                  recipes at the comfort of your home. In order to sample the
                  heart and soul of what makes Italian food so loved, Chef
                  Cristina will focus on teaching you how to work with seasonal
                  vegetables, fish and seafood alongside some of her favorite
                  pasta staples. Let her have you fall in love with Italian food
                  all over again!
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
