import React, { useState, useEffect } from 'react';
import axios from "axios";
import ExpList from './ExpList';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron'
// import Rheostat from 'rheostat';
import NewExp from "./NewExp";
import { Card, Row, Container, Col, Badge } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PageLink from './PageLink'


// import Pagination from "react-pagination-library";


export default function ExperienceList() {
    const [experience, setExperience] = useState([]);
    let [pageNumber, setPageNumber] = useState(1);
    let [maxPageNum, setMaxPageNum] = useState(1)
    let [minPrice, setMinPrice] = useState(1)
    let [maxPrice, setMaxPrice] = useState(1000)

    useEffect(() => {
        axios.get(`http://localhost:5000/experiences/?page=${pageNumber}`).then((res) => {
            console.log(res.data.data)
            setExperience(res.data.data)


        })
    }, [pageNumber]); //stop updating every seconds 

    const goNextPage = () => {
        setPageNumber(pageNumber + 1)
    }
    const goPrevPage = () => {
        setPageNumber(pageNumber - 1)
    }
    if (experience == null) {
        return (
            <div>Error Getting Experiences</div>
        )
    } else {
        return (
            <div>
                <Navbar />
                <Jumbotron />
               

                <div className="d-flex justify-content-end" style={{margin:"0px 20px"}}>
                <PageLink disabled={pageNumber===1} handleClick={goPrevPage}>
                <i class="fal fa-chevron-left"></i>


                </PageLink>
                <PageLink handleClick={goNextPage}>
                <i class="fal fa-chevron-right"></i>

                </PageLink>
                </div>

                {/* <div>
                    <Rheostat
                        min={minPrice}
                        max={maxPrice}
                        values={[minPrice, maxPrice]}
                        // onChange={handleChange}
                    />
                </div> */}
                {/* {experience.map((e,index) => (<Experience key={index} {...e} />))} */}
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

                </div>


            </div>

        )
    }

}
const Experience = ({ title, pictureURL, country, price, duration, _id }) => {
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
                    <Badge variant="secondary" className="badge">
                        Coming soon
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
                    Starting from $ {price} / {duration} minute
                    <div>★ 5.0</div>
                    
          </Card.Text>
                <Link to={"/exps/" + _id} className="stretched-link" />
            </Card.Body>
        </Card>
    );
};
