import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Bookingpage from './pages/Bookingpage'
import Confirmationpage from './pages/Confirmationpage'
import Layout from './layout'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Home />} path="/" />
        <Route element={<Bookingpage />} path="/bookings" />
        <Route element={<Confirmationpage />} path="/confirmation" />
      </Route>
    </Routes>
  )
}

export default App
