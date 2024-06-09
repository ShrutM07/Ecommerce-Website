import React from "react";
import { ListGroup, Button, Row, Col } from "react-bootstrap";
import { FaPlay } from "react-icons/fa"; // Import the play icon from React Icons

const Home = () => {
  const details = [
    {
      date: new Date().toLocaleString(),
      place: "TORONTO, ON",
      description: "BUDWEISER STAGE",
    },
    {
      date: new Date().toLocaleString(),
      place: "LAS VEGAS, NV",
      description: "CONCORD PAVILION",
    },
    {
      date: new Date().toLocaleString(),
      place: "CONCORD, CA",
      description: "JIGGY LUBE LIVE",
    },
    {
      date: new Date().toLocaleString(),
      place: "PHOENIX, AZ",
      description: "AK-CHIN PAVILION",
    },
    {
      date: new Date().toLocaleString(),
      place: "BRISTOW, VA",
      description: "T-MOBILE ARENA",
    },
  ];

  const detailList = details.map((item, index) => (
    <ListGroup.Item key={index} className="card-body border-0 border-bottom">
      <Row>
        <Col xs={12} md={4}>
          <h5>{item.date}</h5>
        </Col>
        <Col xs={12} md={4}>
          <small>{item.place}</small>
        </Col>
        <Col xs={12} md={3}>
          <p>{item.description}</p>
        </Col>
        <Col xs={12} md={1}>
          <Button variant="primary" className="btn-buy-ticket">
            Buy Ticket
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  ));

  return (
    <div>
      <div className="text-center py-4">
        
        <Button variant="success">
          <FaPlay /> {/* Add the play icon */}
          Play Song
        </Button>
      </div>
      <div className="text-center">
        <h2>Latest Album</h2>
        {/* Display latest album here */}
        
      </div>
      <ListGroup className="p-4 m-auto mt-5 mb-5 card w-75 shadow">
        {detailList}
      </ListGroup>
    </div>
  );
};

export default Home;
