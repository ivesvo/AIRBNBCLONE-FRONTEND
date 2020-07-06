import React, { useState, useEffect } from "react";
import { Card, Row, Container, Col, Badge, Pagination } from "react-bootstrap";

const ExperiencesList = () => {
  const [exp, setExp] = useState([]);
  const [pageNum, setPageNum] = useState();
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:5000/exps");
      const exp = await data.json();
      console.log(exp);
      setExp(exp);
    }
    fetchData();
  }, [pageNum]);
  const goPrevPage = () => {
    setPageNum(pageNum - 1);
  };
  const goNextPage = () => {
    setPageNum(pageNum + 1);
  };
  if (exp != null) {
    return (
      <div>
        <h1>Experiences</h1>
        <Pagination disabled={pageNum == 1} />
        <Pagination />
        <Container>
          <Row>
            {exp.map((e) => {
              return (
                <Col lg={3}>
                  <Experience {...e} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  } else return <></>;
};

const Experience = ({
  title,
  pictureUrl,
  country,
  price,
  duration,
  _id,
  whatToBring,
}) => {
  return (
    <div>
      <Card className="card">
        <Card.Img
          variant="top"
          src={pictureUrl}
          alt="something"
          className="card-img"
        />

        <Card.ImgOverlay>
          <Card.Title className="flex1">
            {" "}
            <Badge variant="secondary" className="badge">
              Comming soon
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
          <Card.Title className="title">{title}</Card.Title>
          <Card.Text>
            Starting from $ {price} / {duration} hour
          </Card.Text>
          <a href={"/exps/" + _id} className="stretched-link"></a>
        </Card.Body>
      </Card>
      <h6>{whatToBring}</h6>
    </div>
  );
};
export default ExperiencesList;
