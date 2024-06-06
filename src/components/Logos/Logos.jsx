import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Logos.css';
import css3 from '../../assets/images/icons/icons8-css3-480.png';
import figma from '../../assets/images/icons/icons8-figma-480.png';
import html5 from '../../assets/images/icons/icons8-html5-240.png';
import java from '../../assets/images/icons/icons8-java-240.png';
import mongodb from '../../assets/images/icons/icons8-mongo-db-96.png';
import nodejs from '../../assets/images/icons/icons8-nodejs-480.png';
import python from '../../assets/images/icons/icons8-python-480.png';
import react from '../../assets/images/icons/icons8-react-native-480.png';
import springboot from '../../assets/images/icons/icons8-spring-boot-480.png';

const Logos = () => {

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    loop:true,
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ],
  };

  return (
    <div className='compo'>
      <div className='container m-auto relative py-10'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 px-3'> 
            <div className='slider-container'>
              <div className='lg:py-6 md:py-4 sm:py-4 cursor-all-scroll'>
                <Slider {...settings}>
                  <div><img src={css3} alt="css3" className='h-12' /></div>
                  <div><img src={figma} alt="figma" className='h-12' /></div>
                  <div><img src={html5} alt="html5" className='h-12' /></div>
                  <div><img src={java} alt="java" className='h-12' /></div>
                  <div><img src={mongodb} alt="mongodb" className='h-12' /></div>
                  <div><img src={nodejs} alt="nodejs" className='h-12' /></div>
                  <div><img src={python} alt="python" className='h-12' /></div>
                  <div><img src={react} alt="react" className='h-12' /></div>
                  <div><img src={springboot} alt="springboot" className='h-12' /></div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logos;
