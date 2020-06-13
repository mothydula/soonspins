import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import Artists from './components/Artists'
import testPage from './components/testPage'
import Livestream from './components/Livestream'
import About from './components/About'
import "./Assets/css/default.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
function App() {
  const [artists, setArtists] = useState({})
  useEffect(() => {
    fetch('/artists').then(res => res.json()).then(data => {
      setArtists(data)
    })
  }, [])
  return (
    <div id="page-background">
      <Router>
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
        </Switch>
      </Router>

    </div>
  );
}

export default App;
