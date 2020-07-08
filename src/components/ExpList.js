import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import ExpList from './ExpList';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron'

import Rheostat from 'rheostat';
import Footer from './Footer'
import NewExp from "./NewExp";
import { Card, Row, Container, Col, Badge, Button, Spinner, Alert, Overlay,Popover } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PageLink from './PageLink'


// import Pagination from "react-pagination-library";


export default function ExperienceList() {
    const [experience, setExperience] = useState([]);
    let [pageNumber, setPageNumber] = useState(1);
    let [maxPageNum, setMaxPageNum] = useState(7)
    let [minPrice, setMinPrice] = useState(1)
    let [maxPrice, setMaxPrice] = useState(1000)
    let [tempminPrice, setTempMinPrice] = useState(1)
    let [tempmaxPrice, setTempMaxPrice] = useState(1000)
    let [showAlert, setShowAlert] = useState(false);
    const [target, setTarget] = useState(null);
    const [tags,setTags] = useState([])
    const ref = useRef(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/experiences/?page=${pageNumber}&?minPrice=${minPrice}&maxPrice=${maxPrice}`).then((res) => {
            console.log(res.data.data)
            setExperience(res.data.data)
    })
            axios.get(`http://localhost:5000/tags/`).then((res) => {
                console.log(res.data.data)
                setTags(res.data.data)   

        })
    }, [pageNumber, minPrice, maxPrice]); //stop updating every seconds 
    const handleChange = (e) => {

        setMinPrice(e.values[0])
        setMaxPrice(e.values[1])
    }

    const handleValuesUpdated = (e) => {
        setTempMinPrice(e.values[0])
        setTempMaxPrice(e.values[1])
    }

    const goNextPage = () => {
        setPageNumber(pageNumber + 1)
    }
    const goPrevPage = () => {
        setPageNumber(pageNumber - 1)
    }
    const handleClick = (event) => {
        setShowAlert(!showAlert);
        setTarget(event.target);
      };

      const handleTagsClick = (e) =>{
        const tag = tags.find((item)=>item.tag === e.tag)
        console.log(tag)
        axios.get(`http://localhost:5000/tags/${tag._id}`).then((res) => {
            console.log(res.data.data)
            setExperience(res.data.data)


      })
    };

    if (experience == null) {
        return (
            <div>
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="border" variant="danger" />
                <Spinner animation="border" variant="warning" />
                <Spinner animation="border" variant="info" />
                <Spinner animation="border" variant="light" />
                <Spinner animation="border" variant="dark" />
            </div>
        )
    } else {
        return (
            <div>
                <Navbar />

                <Jumbotron />
                <div className="tags">
                    <Col style={{ marginLeft: "20px" }}>
                        <Button className="btn" variant="light">Date</Button>
                        <Button variant="light">Time of The Day</Button>
                        <Button variant="light" ref={ref} onClick={handleClick}>Price</Button>
                             {
                                 showAlert  ? <Alert showAlert={false} className="box-shadow slider">
                                 <p>Average price is $111.</p>
                                        <Rheostat
                                            min={1}
                                            max={1000}
                                            values={[minPrice, maxPrice]}
                                            onValuesUpdated={handleValuesUpdated}
                                            onChange={handleChange}
                                        />

                                    <div className="d-flex justify-content-between">
                                        <div>
                                            $ {tempminPrice}
                                        </div>
                                        <div>
                                        $ {tempmaxPrice}
                                        </div>
                                            

                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                value={minPrice} x
                                                onChange={(e) => setMinPrice(e.target.value)} />

                                            <input
                                                type="text"
                                                value={maxPrice}
                                                onChange={(e) => setMaxPrice(e.target.value)} />
                                        </div>
                                    
                                </Alert>  : <div></div>
                             }
                             
                        {/* </Overlay> */}
                        {/* <Button variant="light">Language Offered</Button> */}
                    </Col>

                    <Col>{tags.map(element=> <Button onClick={(e)=>handleTagsClick(element)} variant="light">{element.tag}</Button>)}
                        {/* <Button variant="light">Great For Groups +</Button>
                         */}
                        {/* <Button variant="light">Family Friendly +</Button>
                        <Button variant="light">Animals +</Button>
                        <Button variant="light">Arts & Writing +</Button>
                        <Button variant="light">Cooking +</Button> */}
                        {/* <Button variant="light">Dancing +</Button> */}
                    </Col>
                </div>






                <Row style={{ marginRight: "20px" }}>
                    <Col lg={11} className="d-flex justify-content-end" style={{ marginTop: "1.5rem" }}>
                        {pageNumber}/{maxPageNum}
                    </Col>
                    <Col lg={1} className="d-flex justify-content-end">
                        <PageLink disabled={pageNumber === 1} handleClick={goPrevPage}>
                            <i class="fal fa-chevron-left"></i>
                        </PageLink>
                        <PageLink handleClick={goNextPage}>
                            <i class="fal fa-chevron-right"></i>
                        </PageLink>
                    </Col>
                </Row>



                <div className="explist">
                    <Row>
                        {experience.map((e) => {
                            return (
                                <Col lg={3}>
                                    <Experience {...e} />
                                </Col>
                            );
                        })}
                    </Row>
                    <Footer/>
                </div>
            </div>

        )
    }

}
const Experience = ({ title, pictureURL, country, price, duration, _id, rating }) => {
    console.log(_id)
    return (
        <Card style={{ maxWidth: '20rem' }} className="card">
            <Card.Img
                variant="top"
                resizeMode='cover'
                src={pictureURL[4]}
                alt="something"
                className="card-img"
            />

            <Card.ImgOverlay>
                <Card.Title className="flex1">
                    {" "}
                    <Badge className="badge">
                        ONLINE
                    </Badge>
                    <div className="heart-hover">
                        <i
                            className="far fa-heart "
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: 5,
                            }}
                        ></i>
                    </div>
                </Card.Title>
            </Card.ImgOverlay>

            <Card.Body>
                <Card.Text className="country">{country}</Card.Text>
                <Card.Title className="card-title">{title}</Card.Title>
                <Card.Text>
                    Starting from $ {price} / {duration <= 1 ? <span>{duration} hour</span> : <span>{duration} hours</span>}
                    <div>★ {rating}</div>

                </Card.Text>
                <Link to={"/exps/" + _id} className="stretched-link" />
            </Card.Body>
        </Card>
    );
};
