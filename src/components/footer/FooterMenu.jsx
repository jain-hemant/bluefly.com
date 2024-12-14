import { Box, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router'
import { social } from "./FooterImage"
const FooterMenu = () => {
    const navigate = useNavigate()
    const helpLink = [
        {
            id: "1",
            name: "SHIPING & DELEVERY",
            payload: ""
        },
        {
            id: "2",
            name: "RETURN & EXCHANGE",
            payload: ""
        },
        {
            id: "3",
            name: "START A RETURN",
            payload: ""
        },
        {
            id: "4",
            name: "SHOP PAY INSTALLMENT",
            payload: ""
        },
        {
            id: "5",
            name: "LEAVE US FEEDBACK",
            payload: ""
        },
        {
            id: "6",
            name: "SELL ON BLUEFLY",
            payload: ""
        },
        {
            id: "7",
            name: "TERM & CONDITION",
            payload: ""
        },
        {
            id: "8",
            name: "PRIVACY POLICY",
            payload: ""
        },
        {
            id: "9",
            name: "DO NOT SELL MY PRIVATE INFORMATION",
            payload: ""
        },
        {
            id: "10",
            name: "HTML SITEMAP",
            payload: ""
        },

    ]
    return (
        <Grid mt={"40px"} w={"100%"} templateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(4,1fr)"]} textAlign={"center"}>
            <GridItem >
                <Heading fontSize={"1.5rem"} fontWeight={"bold"}>FOLLOW US</Heading>
                <Flex justifyContent={"center"} gap={"20px"} my={"20px"}>
                    <Image width={"40px"} src={social.facebook} />
                    <Image width={"40px"} src={social.instagram} />
                </Flex>
            </GridItem>

            <GridItem textAlign={"left"}>
                <Heading>Help</Heading>
                {
                    helpLink?.map((el, idx) => {
                        return <Box key={idx} fontSize={["0.7rem", "0.8rem"]} >
                            <Link>{el.name}</Link>
                        </Box>
                    })
                }
            </GridItem>

            <GridItem mx={"auto"}>
                <Image width={"80px"} src='https://www.bluefly.com/cdn/shop/files/1595967_1_1_90x@2x.png?v=1712087106' />
            </GridItem>

            <GridItem textAlign={"left"} fontSize={["0.7rem", "0.8rem"]}  >
                <Box fontSize={"1rem"}>NEWSLETTER</Box>
                <Box>PROMOTIONS, NEW PRODUCTS, AND SALES. DIRECTLY TO YOUR INBOX.</Box>
                <Flex justifyContent={"space-between"} borderBottom={"1px solid #bbb"}>
                    <Box>EMAIL</Box>
                    <Box>{"-->"}</Box>
                </Flex>
            </GridItem>
        </Grid>
    )
}

export default FooterMenu