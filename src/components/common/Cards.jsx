import { Card, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Cards = (data) => {
  // const {img,brand,desciption,price,cost} = product
  const defaultImage = "https://idoxb08.sufydely.com/bluefly/assets/images/image/loading/blue-loading-circles-blue-gradient_78370-2646.jpg"

  
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={data.img}
        alt={data.brand}
      />
      <Card.Body gap="2">
        <Card.Title>Living room Sofa</Card.Title>
        <Card.Description>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces.
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
       
      </Card.Footer>
    </Card.Root>
  )
}

export default Cards