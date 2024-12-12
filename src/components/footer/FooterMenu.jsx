import { Box, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router'
import {social} from "./FooterImage"
const FooterMenu = () => {
    const navigate = useNavigate()
    const helpLink =[
        {
            id: "1",
            name:"SHIPING & DELEVERY",
            payload:""                        
        },
        {
             id: "2",
            name:"RETURN & EXCHANGE",
            payload:""                        
        },
        {
             id: "3",
            name:"START A RETURN",
            payload:""                        
        },
         {
             id: "4",
            name:"SHOP PAY INSTALLMENT",
            payload:""                        
        },
        {
             id: "5",
            name:"LEAVE US FEEDBACK",
            payload:""                        
        },
        {
             id: "6",
            name:"SELL ON BLUEFLY",
            payload:""                        
        },
        {
             id: "7",
            name:"TERM & CONDITION",
            payload:""                        
        },
        {
             id: "8",
            name:"PRIVACY POLICY",
            payload:""                        
        },
        {
             id: "9",
            name:"DO NOT SELL MY PRIVATE INFORMATION",
            payload:""                        
        },
        {
             id: "10",
            name:"HTML SITEMAP",
            payload:""                        
        },
        
    ]
  return (
    <Grid w={"100%"} templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(4,1fr)"]}>
        <GridItem>
           <Heading>FOLLOW US</Heading>
            <Flex>
                <Image width={"40px"} src={social.facebook} />
                <Image width={"40px"} src={social.instagram} />
            </Flex>
        </GridItem>
            
        <GridItem>
           {
            helpLink?.map((el,idx)=>{
                return <Box key={idx}>
                    <Link>{el.name}</Link>
                </Box>
            })
           }
        </GridItem>
            
        <GridItem >
            <Image width={"80px"} src='https://www.bluefly.com/cdn/shop/files/1595967_1_1_90x@2x.png?v=1712087106'/>
        </GridItem>

        <GridItem >
            <Box>NEWSLETTER</Box>
            <Box>PROMOTIONS, NEW PRODUCTS, AND SALES. DIRECTLY TO YOUR INBOX.</Box>
            <Flex>
                <Box>EMAIL</Box>
                <Box>{"-->"}</Box>
            </Flex>
        </GridItem>
    </Grid>
  )
}

export default FooterMenu