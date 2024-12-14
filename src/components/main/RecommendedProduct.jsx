import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { arrivalProduct } from './newArrivals'
import Cards from '../common/Cards'

const RecommendedProduct = () => {
  const [recommended, setRecommended] = useState(0)
  const handlePrevious = () => {
    setArrival((prevIndex) => prevIndex - 5 < 0 ? arrivalProduct.length - 5 : prevIndex - 5)
  }
  const handleNext = () => {
    setArrival((prevIndex) => (prevIndex + 5) % arrivalProduct.length)
  }
  return (
    <Flex flexDirection={"column"}>
      <Flex flexDirection={["column", "column", "row"]} justifyContent={"center"} alignItems={"center"}>
        <Flex width={"90%"} justify={"center"}>
          <Heading fontSize={{ base: "3xl" }} textAlign={"center"}>RECOMMENDED PRODUCT</Heading>
        </Flex>
        <Flex w={["100%", "10%"]} justifyContent={["center", "end"]} gap={"20px"} my={"30px"} mr={"20px"}>
          <Button onClick={handlePrevious} bg={"white"} color={"black"} border={"1px solid black"}>prev</Button>
          <Button onClick={handleNext} bg={"white"} color={"black"} border={"1px solid black"}>next</Button>
        </Flex>
      </Flex>

      <Flex flexWrap={"wrap"} gap={"20px"}>
        {
          arrivalProduct.slice(recommended, recommended + 5).map((product) => <Cards key={product.id} data={product} />)
        }
      </Flex>

    </Flex>
  )
}

export default RecommendedProduct