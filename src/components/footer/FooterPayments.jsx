import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { finance } from './FooterImage'
const FooterPayments = () => {
 
  return (
    <Flex flexWrap={"wrap"}>
      {
       Object.entries(finance).map((bank,idx)=>(<Image src = {bank[1]} key={idx} width={"30px"} mr={"10px"}/>)
       )
      }
    </Flex>
  )
}

export default FooterPayments