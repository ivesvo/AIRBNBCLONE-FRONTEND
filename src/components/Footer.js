import React from "react";
import { Row, Container, Col } from "react-bootstrap";
export default function Footer() {
  return (
    <div className="bg-footer">
      <Container>
        <Row className="footer">
          <Col lg={3}>
            <div>
              <h6>ABOUT</h6>
              <p>How Airbnb works</p>
              <p>Diversity & Belonging</p>
              <p>Against Discrimination</p>
              <p>Accessibility</p>
              <p>Trust & Safety</p>
              <p>Airbnb Citizen</p>
              <p>Olympics</p>
              <p>Newsroom</p>
            </div>
          </Col>
          <Col lg={3}>
            <div>
              <h6>COMMUNITY</h6>
              <p>Airbnb Magazine</p>
              <p>Airbnb Associates</p>
              <p>Airbnb for Work</p>
              <p>Invite friends</p>
              <p>Gift cards</p>
              <p>Careers</p>
            </div>
          </Col>
          <Col lg={3}>
            <div>
              <h6>HOST</h6>
              <p>Host your home</p>
              <p>Host an online experience</p>
              <p>Message from CEO Brian Chesky</p>
              <p>Responsible hosting</p>
              <p>Open Homes</p>
              <p>Resource Center</p>
              <p>Community Center</p>
            </div>
          </Col>
          <Col lg={3}>
            <div>
              <h6>SUPPORT</h6>
              <p>Updates for COVID-19</p>
              <p>Help Center</p>
              <p>Cancellation options</p>
              <p>Neighborhood Support</p>
            </div>
          </Col>
        </Row>
        <div className="social-footer">
          <h6>© 2020 Airbnb, Inc. All rights reserved·Privacy·Terms·Sitemap</h6>
          <div className="social" style={{ display: "flex" }}>
            <i class="fas fa-globe"></i>English (US)
            <p style={{ marginLeft: 15, marginRight: 25 }}>$ USD</p>
            <a href="#">
              {" "}
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
