import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { shopByCategory } from './shopByCategory.js'
import { Link } from 'react-router'


const ShopBy = () => {
  return (
    <Flex  flexWrap={"wrap"} gap={"10px"} boxSizing={"border-box"}>
        {
            shopByCategory.map((product)=>{
                return <Box key={product.id} w={["100%","100%","24.4%"]} >
                    <Box>
                        <Image src={product.img}/>
                    </Box>
                    <Box textAlign={"center"}>
                         <Heading>{product.category}</Heading>
                        <Heading>{product.productType}</Heading>
                        <Link>SHOP NOW </Link>
                    </Box> 
                </Box>
            })
        }

    </Flex>
  )
}

export default ShopBy