import React from 'react';
import './HeroSlider.scss';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../assets/images/Cat_Breeds.jpg';
import banner2 from '../../assets/images/Dog_Breeds.jpg';
import banner3 from '../../assets/images/Rabbit_Breeds.jpg';

const Banner = () => {
  return (
    <div className="bannerSlide">
      <Carousel className="slider">
        <Carousel.Item>
          <img className="d-block w-100 h-60" src={banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-60" src={banner2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-60" src={banner3} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;