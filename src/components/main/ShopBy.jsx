import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { shopByCategory } from './shopByCategory.js'
import { Link } from 'react-router'


const ShopBy = () => {
    return (
        <Flex flexWrap={"wrap"} gap={"10px"} boxSizing={"border-box"}>
            {
                shopByCategory.map((product) => {
                    return <Box key={product.id} w={["100%", "100%", "24.4%"]} >
                        <Box>
                            <Image src={product.img} borderTopRadius={"5px"} />
                        </Box>
                        <Box py={"7px"} textAlign={"center"} bg={"purple.fg"} color={"white"} borderBottomRadius={"5px"}>
                            <Heading color={"goldenrod"}>{product.category}</Heading>
                            <Heading color={"silver"}>{product.productType}</Heading>
                            <Box fontSize={"12px"} textDecoration={"underline"}><Link>SHOP NOW </Link></Box>
                        </Box>
                    </Box>
                })
            }

        </Flex>
    )
}

export default ShopBy