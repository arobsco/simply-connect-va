import React from 'react';
import { Carousel } from 'react-bootstrap';
import './style.css';
const Header = props => {
    return(
        <Carousel interval={2000}>
            {props.carouselData.map(slide => {
                return (
                    <Carousel.Item>
                    <img className='d-block w-100' src={slide.url} alt={slide.alt}/>
                    <Carousel.Caption>
                    <h3>{slide.h3}</h3>
                    <p>{slide.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default Header;