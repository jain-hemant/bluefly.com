import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router'

const HeaderLinks = () => {
  return (
    <Flex w={"100%"} bg={"orange"}>
        <Flex w={"50%"} gap={"20px"}>
            <Link to={"/women"}>WOMEN</Link>
            <Link to={"/men"}>MEN</Link>
        </Flex>
        <Flex w={"50%"} justifyContent={"right"} gap={"20px"}>
             <Link to={"/"}>
                <Image w={"20px"} src='https://www.svgrepo.com/show/522266/search.svg'/>
            </Link>
            <Link to={"/"}>
                <Image w={"20px"} src='https://www.svgrepo.com/show/526700/user-circle.svg'/>
            </Link>
           
            <Link>
                <Image w={"20px"} src='https://www.svgrepo.com/show/509026/bag.svg'/>
            </Link>
        </Flex>
    </Flex>
  )
}

export default HeaderLinks