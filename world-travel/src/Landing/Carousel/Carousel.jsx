// 'use client'

import React,{useState} from 'react'
import { Box } from '@chakra-ui/react'
import Slider from 'react-slick'




const settings = {
//   dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 200,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function HomeCarousel() {

  const [slider, setSlider] =useState([])
 

  const cards = [
    
     {
        url : "https://fixflight.s3.ap-south-1.amazonaws.com/media/deals/asia.png",
        name:"ANRITSIR MELBOURNE",
        location:"AIR ASIA"

     },
     {
       url:"https://fixflight.s3.ap-south-1.amazonaws.com/media/deals/AUCK.png", 
       name:"DELHI AUKLAND",
       location:"AUKLAND"
     },
     {
       url:"https://fixflight.s3.ap-south-1.amazonaws.com/media/deals/3.png",
       name:"Scoot Air",
       location:"Amritsir Mebourne",

     },
     {
        url:"https://fixflight.s3.ap-south-1.amazonaws.com/media/deals/4.png",
        name:"DUBAI",
        location:"SPECIAL FAIR"
     },
     {
        url:"https://fixflight.s3.ap-south-1.amazonaws.com/media/deals/5.png",
        name:"AIR INDIA DUBAI",
        location:"DUBAI"
     },
     {
        url:"https://fixflight.s3.ap-south-1.amazonaws.com/media/deals/6.png",
        name:"TURKISH SPECIAL FAIR",
        location:"TORONTO VANCOUVER"
     },
     {
        url:"https://fixflight.s3.ap-south-1.amazonaws.com/media/deals/8.png",
        name:"BRITISH AIRWAYS",
        location:"LONDON"
     },
     {
        url:"https://fixflight.s3.ap-south-1.amazonaws.com/media/deals/9.png",
        name:"OMAN AIR",
        location:"DELHI LONDAN"
     },
     {
        url:"https://fixflight.s3.ap-south-1.amazonaws.com/media/deals/10_FdqZR6X.png",
        name:"VISTARA",
        location:"DELHI LONDAN"
     },
     {
        url:"https://fixflight.s3.ap-south-1.amazonaws.com/media/deals/11_QoYHvD2.png",
        name:"SCOOT AIR",
        location:"SYDNEY"
     },
     {
        url:"https://fixflight.s3.ap-south-1.amazonaws.com/media/deals/12_zFuZ9WM.png",
        name:"ITA AIR",
        location:"DELHI ROME"
     },
     {
        url:"https://fixflight.s3.ap-south-1.amazonaws.com/media/deals/14.png",
        name:"SINGAPORE AIRLINES",
        location:"DELHI VANCOUVER"
     }

  ]

  return (

    <Box position={'relative'} height={"10%"} width={'90%'} margin={"auto"}>
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
            height={'100%'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            overflow={"hidden"}
            width={"100%"} 
            marginBottom={"2px"}
            cursor={"pointer"}
            margin={"20px"}
           shadow={" rgba(0, 0, 0, 0.1) 0px 4px 12px;"}
            // backgroundImage={`url(${url.url})`}
            // border={"1px solid red"}
            
          >
            <img width={"100%"}  src={`${url.url}`} alt="" />
            <h1 style={{fontSize:"25px"}}>{url.name}</h1>
            <p style={{fontSize:"18px",color:"brown"}}>{url.location}</p>
          </Box>
        ))}
      </Slider>
     
    </Box>
  
  )
}

