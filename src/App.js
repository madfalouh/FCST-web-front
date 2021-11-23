import React, { useRef } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import loader from "./assets/loader.gif";
import { BrowserRouter, Redirect,  Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import RegisterPage from './pages/RegisterPage';
import Join from './components/Join/Join';


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
          <Route path='/join' exact component={Join} />
          <Route path='/chats' component={ChatPage} />
      </Router>
    </div>
  );
}

export default App;


