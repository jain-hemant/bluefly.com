import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import AppRouter from './router/AppRouter'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Logo from './components/header/Logo'
import { Link } from 'react-router'

export default function App() {
  return (
    <VStack width={"100%"} >
      <Box width={"100%"}>
        <Link to={"/"}>
          <Logo />
        </Link>
      </Box>
      <Box width={"100%"}>
        <Header />
      </Box>
      <Box width={"100%"}>
        <AppRouter />
      </Box>
      <Box >
        <hr style={{ backgroundColor: " blue" }} />
      </Box>
      <Box width={"100%"}>
        <Footer />
      </Box>

    </VStack>
  )
}
