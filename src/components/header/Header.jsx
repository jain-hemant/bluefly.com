import { VStack } from '@chakra-ui/react'
import React from 'react'
import Menubar from '../navigation/Menubar'
import HeaderLinks from './HeaderLinks'

const Header = () => {
  return (
    <VStack>
        <HeaderLinks/>
        <Menubar/>
    </VStack>
  )
}

export default Header