import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBarComponent from './SideBarComponent'

const DashboardLayOut = () => {
  return (
    <div className='flex gap-5 flex-col md:flex-row'>
        <SideBarComponent/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayOut