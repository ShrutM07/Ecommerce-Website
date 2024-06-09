import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Store/Header';
import Footer from './components/Store/Footer';
import Store from './components/Store/Store';
import Home from './components/Home/Home'; 
import About from './components/About/About';
import ContactUs from './components/Contact Us/ContactUs';
import Cart from './components/Cart/Cart';
import Product from './components/Product/Product'; 
import Login from './components/Login/Login';
import PrivateRoute from './components/Store/PrivateRoute';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CartProvider } from './components/Store/CartContext';
import { AuthContextProvider } from './components/Store/AuthContext';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <CartProvider>
      <AuthContextProvider> {/* Wrap the entire app with AuthContextProvider */}
        <Router>
          <Header handleCartClick={handleCartClick} />
          <div className="title-container">
            <h1>The Generics</h1>
          </div>
          <main>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={ContactUs} />
              <Route path="/login" component={Login} /> {/* Add the login route */}
              <PrivateRoute path="/store" component={Store} /> {/* Use PrivateRoute for Store route */}
              <PrivateRoute path="/product/:productId" component={Product} /> {/* Use PrivateRoute for Product route */}
              <Redirect from="/" to="/Store" /> {/* Redirect root to home */}
            </Switch>
          </main>
          <Footer />
          <Cart isCartOpen={isCartOpen} closeCart={closeCart} />
        </Router>
      </AuthContextProvider>
    </CartProvider>
  );
};

export default App;
