import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from './Carousel'
import ShopBy from './ShopBy'
import NewArriaval from './NewArriaval'
import RecommendedProduct from './RecommendedProduct'


const Main = () => {
  const offerImage = "https://idoxb08.sufydely.com/bluefly/assets/images/image/banner/2banner-HOLIDAY_MEGA_SALE_BANNER_2000x800_84690522-955b-45d1-b6a2-e0b7f8d57c6f.jpg"
  return (
    <Box>
      <Box>
        <Image w={"100%"} src={offerImage} />
      </Box>
      <Flex flexDir={"column"} gap={"40px"} p={""}>
        <Carousel />
        <Heading fontSize={{ base: "3xl" }} textAlign={"center"}>SHOP BY</Heading>
        <ShopBy />
        <NewArriaval />
        <RecommendedProduct />
      </Flex>
    </Box>
  )
}

export default Main