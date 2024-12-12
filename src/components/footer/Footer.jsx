import { VStack } from '@chakra-ui/react'
import React from 'react'
import FooterMenu from './FooterMenu'
import FooterPayments from './FooterPayments'

const Footer = () => {
  return (
    <VStack >
        <FooterMenu/>
        <FooterPayments/>
    </VStack>
  )
}

export default Footer