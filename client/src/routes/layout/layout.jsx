import React from 'react'
import "./layout.scss"
import Navbar from '../../Components/navbar/Navbar'
// import Homepage from '../homepage/Homepage'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
     <div className="layout">
      <div>
        <Navbar />
      </div>
      <div className="content">
       <Outlet/>
      </div>
    </div>
  )
}

export default layout
