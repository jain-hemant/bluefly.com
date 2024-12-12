import { Box, Button, Flex, Image } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { images } from './carouselImage' 
export const Carousel = () => {
  let [slideNo, setSlideNo]  = useState(0) 
  const imageRef = useRef(null) 
  const imgLength = images.length
  useEffect(()=>{
    const timer =  setInterval(() => {
        // console.log(slideNo)
        setSlideNo(slideNo<imgLength-1?slideNo+1:0)
        
    }, 3000);
    return ()=> clearInterval(timer)
  },[slideNo])  
  return (
    <Box>                 
        <Box position={"relative"}>
            <Image w={"100%"} h={"440px"} src={images[slideNo].image}/>
        </Box>
        <Flex flexDirection={"column"} alignItems={"center"} fontSize={"2.5rem"} fontWeight={"bolder"} color={"white"} position={"absolute"} bottom={"50%"} right={"50%"} translate={"50%"}>
            <Box>{images[slideNo].offer}</Box>
            <Box>{images[slideNo].brand}</Box>
            <Box><Button bg={"transparent"} borderRadius={"20px"} borderColor={"white"}>SHOP NOW</Button></Box>
        </Flex>
    </Box>

)
}
