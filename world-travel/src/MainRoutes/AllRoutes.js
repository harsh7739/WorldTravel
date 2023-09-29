import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Destination from '../Destination Page/Destination'
import SinlgeDestination from '../Destination Page/SinlgeDestination'
import SingleHotel from '../Destination Page/SingleHotel'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Destination />} />
            <Route path='/destination/:id' element={<SinlgeDestination />} />
            <Route path='/hotel/:hotel_id' element={<SingleHotel />} />
        </Routes>
    </>
  )
}

export default AllRoutes