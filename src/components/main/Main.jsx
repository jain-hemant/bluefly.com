import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from './Carousel'
import ShopBy from './ShopBy'
import NewArriaval from './NewArriaval'
import RecommendedProduct from './RecommendedProduct'


const Main = () => {
  const offerImage = "https://www.bluefly.com/cdn/shop/files/2024_Holiday_Luxury_Specials_Top_Banner_Small_Size.jpg?v=1733447107&width=1200"
  return (
    <Box>
      <Box>
        <Image w={"100%"} src={offerImage} />
      </Box>
      <Flex flexDir={"column"} gap={"40px"} p={""}>
        <Carousel />
        <Heading fontSize={{ base: "3xl"}} textAlign={"center"}>SHOP BY</Heading>
        <ShopBy />
        <NewArriaval />
        <RecommendedProduct />
      </Flex>
    </Box>
  )
}

export default Main