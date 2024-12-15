import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../utility/products.utitlity'
import ProductCard from '../components/common/ProductCard'

const SinglePage = () => {
    const { collectionId } = useParams();
    const [productsData, setProductsData] = useState(products[collectionId] ?? []);

    if (productsData.length === 1) {
        const product = productsData[0]
        return <Flex width={"90%"} margin={"auto"}>
            <Image src={product.img} width={"50%"} height={"70vh"} />
            <Box>
                <Text>{product.id}</Text>
                <Text>{product.category}</Text>
            </Box>

        </Flex>
    }
    return (
        <Flex flexWrap={"wrap"} gap={"20px"} width={"98%"} margin={"auto"}>
            {
                productsData.map((product) => <ProductCard key={product.id} data={product} />)
            }
        </Flex>
    )
}

export default SinglePage