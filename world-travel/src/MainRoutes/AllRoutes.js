import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Destination from '../Destination Page/Destination'
import SinlgeDestination from '../Destination Page/SinlgeDestination'
import SingleHotel from '../Destination Page/SingleHotel'
import Admin from '../Components/Admin/Admin'
import HomePage from '../Landing/HomePage/HomePage'
import About from '../Landing/About/About'
import Message from '../Landing/Message/Message'
import Login from '../Components/Login'

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/message' element={<Message />} />
        <Route path='/about' element={<About />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/destination/:id' element={<SinlgeDestination />} />
        <Route path='/hotel/:hotel_id' element={<SingleHotel />} />
      </Routes>
    </>
  )
}

export default AllRoutes