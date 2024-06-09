import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useCart } from "./CartContext";

const Store = () => {
  const { addItemToCart } = useCart();
  const history = useHistory();

  const productsArr = [
    {
      id: '1',
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      id: '2',
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      id: '3',
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      id: '4',
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ];

  const handleProductClick = (productId) => {
    history.push(`/product/${productId}`);
  };

  const handleAddToCartClick = (event, product) => {
    event.stopPropagation(); // Prevents the click event from propagating to parent elements
    addItemToCart(product);
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Row>
        {productsArr.map((product) => (
          <Col key={product.id} md={6} lg={3} className="mb-4">
            <Card onClick={() => handleProductClick(product.id)}>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button variant="outline-info" onClick={(e) => handleAddToCartClick(e, product)}>Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Store;
