import { Box, Button, Flex, Image } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { images } from './carouselImage'
export const Carousel = () => {
    let [slideNo, setSlideNo] = useState(0)
    const imageRef = useRef(null)
    const imgLength = images.length
    useEffect(() => {
        const timer = setInterval(() => {
            // console.log(slideNo)
            setSlideNo(slideNo < imgLength - 1 ? slideNo + 1 : 0)

        }, 3000);
        return () => clearInterval(timer)
    }, [slideNo])
    return (
        <Box bg={"black"} textAlign={"center"}>
            <Box w={"100%"} h={["440px", "80vh"]} position={"relative"} bgImage={`url(${images[slideNo].image})`} bgSize={"cover"} opacity={"0.6"} >
                {/* <Image w={"100%"} h={"440px"} src={images[slideNo].image}/> */}

            </Box>
            <Flex flexDirection={"column"} gap={["30px", "20px"]} alignItems={"center"} justifyContent={"center"} fontSize={["1.5rem", "2rem", "2.5rem"]} fontWeight={"bolder"} textWrap={"wrap"} color={"white"} position={"absolute"} bottom={["100", "94%", "60%", "75%"]} right={"50%"} translate={"50%"}>
                <Box>{images[slideNo].offer}</Box>
                <Box>{images[slideNo].brand}</Box>
                <Box><Button bg={"transparent"} borderRadius={"20px"} borderColor={"white"}>SHOP NOW</Button></Box>
            </Flex>
        </Box>

    )
}
