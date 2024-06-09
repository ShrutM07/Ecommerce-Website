import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-4">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h1><b>The Generics</b></h1>
          </Col>
          <Col className="text-center py-3">
            <a 
              href="https://www.youtube.com/channel/your-channel-id" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white float-end"
            >
              <i className="fab fa-youtube fa-2x" style={{ color: 'red' }}></i>
            </a>
            <a 
              href="https://open.spotify.com/user/your-user-id" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="float-end"
            >
              <i className="fab fa-spotify fa-2x spotify-icon" style={{ color: 'green' }}></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
