import React from 'react';
import image1 from '../../../assets/Banner/img1.jpg';
import image2 from '../../../assets/Banner/img2.jpg';
import image3 from '../../../assets/Banner/img3.jpg';
import image4 from '../../../assets/Banner/img4.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="carousel w-full resize-banner">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-15 right-5 top-2/4">
                    <h1 className='text-white text-6xl'>
                     Take a <br /> Coffee!
                    </h1>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-15 right-5 top-2/4">
                    <h1 className='text-white text-6xl'>
                    Take a <br /> 
                    Coffee!
                    </h1>
                </div>
                
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-15 right-5 top-2/4">
                    <h1 className='text-white text-6xl'>
                    Take a <br />
                    Coffee
                    </h1>
                </div>
               
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={image4} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-15 right-5 top-2/4">
                    <h1 className='text-white text-6xl'>
                        Take a <br /> Coffee!
                    </h1>
                </div>
                
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;