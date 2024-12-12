import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <Flex width={"100%"}>
        <Text>BLUE</Text> 
        <Image width={"60px"} src='https://www.bluefly.com/cdn/shop/files/1595967_1_1_90x@2x.png?v=1712087106'/>Fly
        <Text>FLY</Text>
    </Flex>
  )
}

export default Logo