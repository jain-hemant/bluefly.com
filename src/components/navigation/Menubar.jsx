import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router'

const Menubar = () => {
  const downArrow = "https://www.svgrepo.com/show/520696/down-arrow-5.svg"
  return (
    <Flex w={"100%"} gap={"20px"} flexWrap={"wrap"}>
        <Flex><Link to={"/designers"}>DESIGNERS </Link> <Image w={"15px"} src={downArrow}/> </Flex>
        <Flex><Link to={"/clothing"}>CLOTHING</Link><Image w={"15px"} src={downArrow}/></Flex>
        <Flex><Link to={"/shoes"}>SHOES</Link> <Image w={"15px"} src={downArrow}/></Flex>
        <Flex><Link to={"/handbags"}>HANDBAGS</Link><Image w={"15px"} src={downArrow}/></Flex>
        <Flex><Link to={"/sunglasses"}>SUNGLASSES</Link><Image w={"15px"} src={downArrow}/></Flex>
        <Flex><Link to={"/jewelry"}>JEWELRY</Link><Image w={"15px"} src={downArrow}/></Flex>
        <Flex><Link to={"/accessories"}>ACCESSORIES</Link><Image w={"15px"} src={downArrow}/></Flex>
        <Flex><Link to={"/under50"}>UNDER $50</Link><Image w={"15px"} src={downArrow}/></Flex>
        <Flex><Link to={"/clearance"}>CLEARANCE</Link><Image w={"15px"} src={downArrow}/></Flex>
    </Flex>
  )
}

export default Menubar