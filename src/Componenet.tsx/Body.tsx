import React from 'react'
import DarkHeader from './DarkHeader'
import { Outlet } from 'react-router-dom'
import Main from './Main'
const Body = () => {
  return (
    <div>
       <DarkHeader></DarkHeader>
      <Outlet></Outlet>
    </div>
  )
}

export default Body