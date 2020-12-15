import React from 'react';
import { Carousel } from 'react-bootstrap';
import './style.css';
const Header = () => {
    const carouselImages = [
        {
            url:'https://media.discordapp.net/attachments/782372821799141456/788152604446031882/20201214221621_1.jpg?width=2000&height=500',
            h3:'First image h3',
            description:'Description text',
            alt:'Alt text'
        },
        {
            url:'https://media.discordapp.net/attachments/782372821799141456/788071421007757322/20201214160116_1.jpg?width=2000&height=300',
            h3:'Second image h3',
            description:'Description text',
            alt:'Alt text'
        },
        {
            url:'https://media.discordapp.net/attachments/782372821799141456/786637361442324590/20201210173237_1_-_Copy.jpg?width=2000&height=300',
            h3:'Third image h3',
            description:'Description text',
            alt:'Alt text'
        },
        {
            url:'https://media.discordapp.net/attachments/782372821799141456/787652826792067102/20201202165818_1.jpg?width=2000&height=400',
            h3:'Fourth image h3',
            description:'Description text',
            alt:'Alt text'
        }
    ];
    return(
        <Carousel interval={2000}>
            {carouselImages.map(slide => {
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