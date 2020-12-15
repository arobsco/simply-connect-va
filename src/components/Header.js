import React from 'react';
import { Carousel } from 'react-bootstrap';
const Header = () => {
    const carouselStyles = {
        'max-width':'900px',
        'max-height':'600px !important'
    }
    return(
        <Carousel interval={2000} style={carouselStyles}>
            <Carousel.Item>
                <img className="d-block w-100" src='https://via.placeholder.com/800x400?text=Image1' alt='placeholder'/>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src='https://via.placeholder.com/800x400?text=Image2' alt='placeholder'/>
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src='https://via.placeholder.com/800x400?text=Image3' alt='placeholder'/>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src='https://via.placeholder.com/800x400?text=Image4' alt='placeholder'/>
                <Carousel.Caption>
                <h3>Fourth slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Header;