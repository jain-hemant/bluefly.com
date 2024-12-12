import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Slider from './Slider'

const Main = () => {
  const offerImage = "https://www.bluefly.com/cdn/shop/files/2024_Holiday_Luxury_Specials_Top_Banner_Small_Size.jpg?v=1733447107&width=1200" 
  return (
    <Box>
        <Box>
            <Image w={"100%"} src ={offerImage}/>
        </Box>
        <Box>
            <Slider/>
        </Box>
    </Box>
  )
}

export default Main