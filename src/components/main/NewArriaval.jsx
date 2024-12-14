import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { arrivalProduct } from './newArrivals'
import Cards from '../common/Cards'

const NewArriaval = () => {
  const [arrival, setArrival] = useState(0)
  // const [recommended, setRecommended] = useState({
  //   start: 0,
  //   end: 6
  // })

  const handlePrevious = () => {
    setArrival((prevIndex) => prevIndex - 5 < 0 ? arrivalProduct.length - 5 : prevIndex - 5)
  }
  const handleNext = () => {
    setArrival((prevIndex) => (prevIndex + 5) % arrivalProduct.length)
  }
  return (
    <Flex flexDirection={"column"}>
      <Flex >
        <Flex width={"90%"} justify={"center"}>
          <Heading fontSize={{ base: "3xl" }} textAlign={"center"}>NEW ARRIVAL</Heading>
        </Flex>
        <Flex w={"10%"} justifyContent={"end"} gap={"20px"} my={"10px"}>
          <Button onClick={handlePrevious} bg={"white"} color={"black"} border={"1px solid black"}>prev</Button>
          <Button onClick={handleNext} bg={"white"} color={"black"} border={"1px solid black"}>next</Button>
        </Flex>
      </Flex>

      <Flex flexWrap={"wrap"} gap={"20px"}>
        {
          arrivalProduct.slice(arrival, arrival + 5).map((product) => <Cards key={product.id} data={product} />)
        }
      </Flex>

    </Flex>
  )
}

export default NewArriaval