import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { arrivalProduct } from './newArrivals'
import Cards from '../common/Cards'

const NewArriaval = () => {
  return (
    <Box>
        <Flex flexWrap={"wrap"} gap={"20px"}>
            {
                arrivalProduct.map((product)=> <Cards key={product.id} data={product}/>) 
            }
        </Flex>
       
    </Box>
  )
}

export default NewArriaval