import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/women' element={<Home/>}/>
        <Route path='/men' element={<Home/>}/>
    </Routes>
  )
}

export default AppRouter