import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Assets/Images/banner3.jpg'
import banner2 from '../../Assets/Images/banner3.jpg'
import banner3 from '../../Assets/Images/banner3.jpg'


const Slider = () => {
    return (
        <div>
            <Carousel >
         
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="First slide"
                    />
                        
                </Carousel.Item >

                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Second slide"
                    />
                    
                </Carousel.Item>
              
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Third slide"
                    />
                </Carousel.Item>
              
            </Carousel>
        </div>
    );
};

export default Slider;