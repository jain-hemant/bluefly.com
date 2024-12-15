import { Box, Card, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ProductCard = ({ data }) => {
  // const {img,brand,desciption,price,cost} = product
  const defaultImage = "https://idoxb08.sufydely.com/bluefly/assets/images/image/loading/blue-loading-circles-blue-gradient_78370-2646.jpg"
  // console.log(data.img[0]);
  return (
    <Flex w={["100%", "100%", "48%", "18.5%"]} flexDir={"column"} gap={"10px"} pb={"10px"} justifyContent={"space-between"} alignItems={"center"} boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset" >
      <Box>
        <Image
          src={data.img}
          alt={data.category}
          height={"128px"}
        />
      </Box>
      <Box w={"70%"} textAlign={"center"}>
        {/* <Box> <Text>{data.brand}</Text></Box> */}
        {/* <Box><Text fontSize={"12px"}>{data.description}</Text></Box> */}
        <Flex justifyContent={"center"} gap={"5px"} alignItems={"center"}>
          {/* <Text fontSize={"14px"} textDecorationLine={"line-through"}>${data.price}</Text> */}
          {/* <Text>${data.cost}</Text> */}
        </Flex>
      </Box>
      <Box w={"fit-content"} bg={"red"} color={"white"} fontSize={"10px"} p={"1px 5px"} borderRadius={"10px"}>
        <Text>Extra off {data.off}% in Cart</Text>
      </Box>
    </Flex>
  )
}

export default ProductCard