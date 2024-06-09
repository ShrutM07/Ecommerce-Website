import React from 'react';
import { Container, Nav, Navbar, Button, Badge } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';
import { useAuth } from './AuthContext';

const Header = ({ handleCartClick }) => {
  const location = useLocation();
  const { cartItems } = useCart();
  const { isLoggedIn, logout } = useAuth();

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/store">Store</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
            {isLoggedIn ? (
              <Button variant="link" onClick={handleLogout}>Logout</Button>
            ) : (
              <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
            )}
          </Nav>
          {isLoggedIn && location.pathname === '/store' && (
            <Button variant="outline-info" className="ms-auto" onClick={handleCartClick}>
              Cart <Badge bg="secondary">{getTotalItems()}</Badge>
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
