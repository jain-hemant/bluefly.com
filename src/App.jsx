import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import AppRouter from './router/AppRouter'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Logo from './components/header/Logo'

export default function App() {
  return (
    <VStack width={"100%"} bg={"yellow"}>
      <Box width={"100%"}>
        <Logo/>
      </Box>
      <Box width={"100%"}>
        <Header/>
      </Box>

      <Box width={"100%"}>
        <AppRouter/>
      </Box>

      <Box width={"100%"}>
        <Footer/>
      </Box>

    </VStack>
  )
}
