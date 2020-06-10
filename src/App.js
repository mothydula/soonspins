import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import Artists from './components/Artists'
import "./Assets/css/default.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col} from "react-bootstrap"
function App() {
  const [artists, setArtists] = useState({})
  useEffect(()=>{
    fetch('/artists').then(res => res.json()).then(data => {
      setArtists(data)
    })
  }, [])
  return (
    <div>
      <Header />

    <Body />
    <Artists artists={artists}/>

      <Footer />
    </div>
  );
}

export default App;
