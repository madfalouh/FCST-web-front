import React, { useEffect, useState  } from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import './App.css';
import loader from "./assets/loader.gif";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import RegisterPage from './pages/RegisterPage';
import ProductPage from './pages/ProductPage';
import CreateProductPage from './pages/CreateProductPage';

const jwt = require("jsonwebtoken");


const isTokenValid = () => {
  const token = sessionStorage.getItem('__TOKEN__'); 
  if(token) { 
    const decoded_token = jwt.verify(sessionStorage.getItem('__TOKEN__'), process.env.REACT_APP_TOKEN_KEY);
    const now = Math.floor(Date.now() / 1000);
    return decoded_token && decoded_token.exp > now;
  } else {
    return false;
  }
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5200);
  }, [])

  return (
    <div className="App">
      <Router>
          {!isLoading ?
            (
              <Route exact path="/" render={() => (<Redirect to="/home"/>)} />
            ) : (
              <Route exact path="/">
                <img src={loader} className="gif-loader "  layout="fill" ></img>
              </Route>
            )
          }
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/products" component={ProductPage} />
          <Route path='/chats' component={ChatPage} />
          <Route path='/create_product' component={CreateProductPage} />

      </Router>
    </div>
  );
}

export default App;


