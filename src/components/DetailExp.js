import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Container, Col, Button, Badge } from "react-bootstrap";
import "./detailExp.css";
import ExperiencesList from "./ExperiencesList";
import Description from "./Description";
export default function DetailExp() {
  let { expId } = useParams();

  return (
    <div>
      <div className="banner">
        <Container>
          <Row>
            <Col lg={2} md={2} sm={2}>
              <div class="logo">
                <img src="https://ohpartners.com/wp-content/uploads/2019/02/logo-airbnb-white.png"></img>
              </div>
            </Col>
            <Col lg={7} md={7} sm={7}>
              <div className="fix-input">
                <i
                  className="far fa-search"
                  style={{
                    marginTop: 30,
                    position: "relative",
                    marginLeft: 30,
                  }}
                ></i>
                <input
                  type="text"
                  placeholder="            Add a location"
                  class="input-detail"
                />
              </div>
            </Col>
            <Col lg={3} md={3} sm={3} className="nav-detail-right">
              <div className="dropdown">
                <Button className="dropbtn">
                  <i class="fas fa-globe"></i>
                  <i class="fas fa-angle-down"></i>
                </Button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>

              <Button className="btn-help">Help</Button>
              <Button className="btn-signup">
                Sign Up
                {/* {expId} */}
              </Button>
            </Col>
          </Row>

          <Row className="slider">
            <img
              width={320}
              height={448}
              src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1746293-media_library/original/5c2fdc86-6f16-4ad2-8788-372ff85a4113.jpeg?aki_policy=exp_md"
            />

            <img
              style={{ marginRight: 5, marginLeft: 5 }}
              width={320}
              height={448}
              src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1746293-media_library/original/75578928-27fe-4055-bc50-5ee36ffae190.jpeg?aki_policy=exp_md"
            />

            <div className="img-column">
              <img
                width={155}
                height={222}
                src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1746293-media_library/original/318f6b61-4fb4-4675-9868-ebe89fc9184b.jpeg?aki_policy=exp_md"
              />

              <img
                height={221}
                width={155}
                style={{
                  marginTop: 5,
                }}
                src="https://a0.muscache.com/im/pictures/778ba7f4-8a60-4db0-9e45-db87d879cf3f.jpg?aki_policy=exp_md"
              />
            </div>

            <img
              style={{ marginLeft: 5 }}
              width={320}
              height={448}
              src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1746293-media_library/original/eaea1452-997c-4164-8396-cdfa8c247e52.jpeg?aki_policy=exp_md"
            />
          </Row>

          <Row>
            <Col lg={4}>
              <Badge variant="light" className="badge-detail">
                <i class="fas fa-play"></i> online experience
              </Badge>

              <div className="info-detail">
                <h3>Michelin Star Chef - Cristina Bowerman</h3>
                <h6>Rome, Italy</h6>
                <Badge variant="secondary">Cooking</Badge>
              </div>
              <div>
                <Button>
                  <a href={`/${expId}/update`}>Update</a>
                </Button>
                <Button>Delete</Button>
              </div>
            </Col>

            <Col lg={8}>
              <div className="line">
                <h6>
                  Book and join this experience from your computer, phone, or
                  tablet.
                </h6>
              </div>
              <div className="flex3">
                <div className="duration">
                  <i className="fas fa-clock"></i>
                  <h5>Duration</h5>
                  <p>1 hour</p>
                </div>
                <div className="group-size">
                  <i className="fas fa-user-friends"></i>
                  <h5>Group size</h5>
                  <p>Up to 10 people</p>
                </div>
                <div className="hosted">
                  <i className="fad fa-comments"></i>
                  <h5>Hosted in</h5>
                  <p>English, Italian</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Description />
    </div>
  );
}
