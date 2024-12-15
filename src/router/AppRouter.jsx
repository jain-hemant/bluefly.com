import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SinglePage from '../pages/SinglePage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/women' element={<Home />} />
      <Route path='/men' element={<Home />} />
      <Route path='/collections/:collectionId' element={<SinglePage />} />
      {/* <Route path='/cart/:cartId' element={<SinglePage />} /> */}
    </Routes>
  )
}

export default AppRouter