import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import Artists from './components/Artists'
import testPage from './components/testPage'
import Livestream from './components/Livestream'
import Admin from './components/Admin'
import About from './components/About'
import Login from './components/auth/Login'
import "./Assets/css/default.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback, LoginCallback } from '@okta/okta-react'
function App() {
  const [artists, setArtists] = useState({})
  useEffect(() => {
    fetch('/artists').then(res => res.json()).then(data => {
      setArtists(data)
    })
  }, [])

  const history = useHistory();
  const onAuthRequired = () => { 
    history.push('/login');
  };

  return (


        <Security issuer='https://dev-611338.okta.com/oauth2/default'
          clientId='0oaf4xvvneWRYugLF4x6'
          redirectUri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
          pkce={true}>
          <Switch>
            <Route exact path="/">
              <Header />
              <Body />
              <Artists artists={artists} />
              <Footer />
            </Route>
            <Route path="/testPage" component={testPage} />
            <Route exact path="/livestream" component={Livestream} />
            <Route exact path="/about" component={About} />
            <SecureRoute exact path="/admin" component={Admin} />
            <Route exact path='/login' render={() => <Login issuer='https://dev-611338.okta.com' />} />
            <Route exact path='/implicit/callback' component={LoginCallback} />
          </Switch>
        </Security>



  );
}

export default App;
