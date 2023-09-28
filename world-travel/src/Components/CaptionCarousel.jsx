'use client'

import React,{useState} from 'react'
import { Box } from '@chakra-ui/react'
import Slider from 'react-slick'

 import beach from "../Components/Image/beach.avif";
import falls from "../Components/Image/falls.avif"
import mount from "../Components/Image/mount.avif";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function Carousel() {

  const [slider, setSlider] =useState([])

  const cards  = [
   mount,falls,beach
  ]

  return (

    <Box position={'relative'} height={'100%'} width={'100%'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
     
      {/* Slider */}
    
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            className="card-image"
            height={'438px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            overflow={"hidden"}
            width={"100%"} 
            marginBottom={"2px"}
            backgroundImage={`url(${url})`}
            // style={{width:"100%"}}
            // border={"1px solid red"}
          />

        ))}
        
      </Slider>
     
    </Box>
  
  )
}

