import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Destination from '../Destination Page/Destination'
import SinlgeDestination from '../Destination Page/SinlgeDestination'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Destination />} />
            <Route path='/destination/:id' element={<SinlgeDestination />} />
        </Routes>
    </>
  )
}

export default AllRoutes