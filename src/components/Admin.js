import React from 'react'
import { useRef, useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'

import 'video.js/dist/video-js.css'
import { Container, Jumbotron, Row } from 'react-bootstrap'
import $ from 'jquery'
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
const Admin = () => {
    const { authState, authService } = useOktaAuth();
    if (authState.isPending) { 
        return <div>Loading...</div>;
      }
      const button = authState.isAuthenticated ?
    <button onClick={() => {authService.logout()}}>Logout</button> :
    <button onClick={() => {authService.login()}}>Login</button>;
    return (

        <div>
        <div style={{ textColor: "black" }}>admin</div>
        {button}
        </div>
    )
}

export default Admin