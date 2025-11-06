import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import HotelDetails from './Pages/HotelDetails'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Veltara" element={<Home />} />
        <Route path="/rooms/:id" element={<HotelDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
