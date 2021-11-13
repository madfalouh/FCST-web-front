import './App.css';
import HomePage from './pages/HomePage';
import { useEffect, useState } from 'react';
import loader from "./assets/loader.gif";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5200);
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {!isLoading ?
            (
              <Route exact path="/" render={() => (<Redirect to="/home"/>)} />
            ) : (
              <Route exact path="/">
                <img src={loader} className="gif-loader"></img>
              </Route>
            )
          }
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
