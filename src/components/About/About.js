import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import bandMemberImg from "../../asset/bandMembers.png";
const About = () => {
return (
    <Container className="d-flex ">
      <Row>
        <Col xs={4} md={4}>
          <Image src={bandMemberImg} thumbnail />
        </Col>
        <Col className="align-self-center">
        <h3><b>About Us</b></h3>
        <br></br>
        
          <h4>
          Welcome to The Generics!
          We are a band that loves creating and sharing music with our fans.
          Our making music journey started in 2005 and since then, we've been committed to bringing the best tunes to our audience. 
          We love to create music and provide the best Theropy to you all and making and spreading joy is our duety for that, support us by sharing the link and make the more loved once happy like you
          Thank you for your support.
          we hope you enjoy our music as much as we enjoy making it!
          </h4>
        </Col>
      </Row>
    </Container>
  );
};

export default About;