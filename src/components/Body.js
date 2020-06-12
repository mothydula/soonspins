import React from 'react'
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Carousel, Container } from 'react-bootstrap'
const Body = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex((oldIndex)=>(oldIndex+1)%3);
    };
    useEffect(() => {
        setInterval(myMethod, 5000);
        return () => {
            clearInterval() 
        }
    }, [])
    const myMethod = ()=>{
        setIndex((oldIndex)=>(oldIndex+1)%3);
    }
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(()=>{
      fetch('/time').then(res => res.json()).then(data => {
        setCurrentTime(data.time)
      })
    }, [])
    return (
      <Container fluid id="main-carousel" className="no-gutters">
      <Carousel  activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{height: "100%"}}>
          
          <img
          
            className="d-block w-100"
            src="https://static.fox32chicago.com/www.fox32chicago.com/content/uploads/2019/11/GETTY-kanye-west-maga-hat-trump.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
    <h3>First slide label the time is {currentTime}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height: "100%"}}>
          <img
            className="d-block w-100"
            src="https://static.fox32chicago.com/www.fox32chicago.com/content/uploads/2019/11/GETTY-kanye-west-maga-hat-trump.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height: "100%"}}> 
          <img
            className="d-block w-100"
            src="https://static.fox32chicago.com/www.fox32chicago.com/content/uploads/2019/11/GETTY-kanye-west-maga-hat-trump.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
    );
}

export default Body