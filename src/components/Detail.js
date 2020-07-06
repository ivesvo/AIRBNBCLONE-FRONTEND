import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { Row, Container, Col, Button, Badge } from "react-bootstrap";
import "./Detail.css";
import ExpList from "./ExpList";
import Description from "./Description";
import axios from 'axios'



export default function DetailExp() {
  let [experience,setExperience] = useState([]);
  let { expId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/experiences/${expId}`).then((res) => {
        console.log(res.data.data)
        setExperience(res.data.data)
    })
}, []); // avoiding infinite loop
  if(experience.length ==0)
    return <></>
  
  return (
    <div>
      <div className="banner">
        <Container>
          <Row>
            <Col lg={2} md={2} sm={2}>
              <div class="logo">
                <img src=""></img>
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
                  placeholder="Add a location"
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
              src={experience.pictureURL[0]}
            />

            <img
              style={{ marginRight: 5, marginLeft: 5 }}
              width={320}
              height={448}
              src={experience.pictureURL[1]}
            />

            <div className="img-column">
              <img
                width={155}
                height={222}
                src={experience.pictureURL[2]}
                />

              <img
                height={221}
                width={155}
                style={{
                  marginTop: 5,
                }}
                src={experience.pictureURL[3]}
              />
            </div>

            <img
              style={{ marginLeft: 5 }}
              width={320}
              height={448}
              src={experience.pictureURL[4]}
            />
          </Row>

          <Row>
            <Col lg={4}>
              <Badge variant="light" className="badge-detail">
                <i class="fas fa-play"></i> online experience
              </Badge>
              {/* <div> {title}</div>
            <div>{country}</div> */}

              <div className="info-detail">
                <h3>{experience.title}</h3>
                <h6>{experience.country}</h6>
                <Badge variant="secondary">
                  {/* {experience.tag[0].populate()} */}
                  Cooking
                  {/* {badge} */}
                </Badge>
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
                  <p>{experience.duration} minutes</p>
                </div>
                <div className="group-size">
                  <i className="fas fa-user-friends"></i>
                  <h5>Group size</h5>
                  <p>Up to {experience.groupsize} people</p>
                </div>
                <div className="hosted">
                  <i className="fad fa-comments"></i>
                  <h5>Hosted in</h5>
                  <p>{experience.language}</p>
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