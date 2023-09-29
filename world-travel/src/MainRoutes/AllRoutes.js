import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Destination from '../Destination Page/Destination'
import SinlgeDestination from '../Destination Page/SinlgeDestination'
import Admin from '../Components/Admin/Admin'
import { AdminProducts } from '../Components/Admin/AdminProducts'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Destination />} />
            <Route path='/destination/:id' element={<SinlgeDestination />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/adminproducts' element={<AdminProducts />} />
        </Routes>
    </>
  )
}

export default AllRoutes