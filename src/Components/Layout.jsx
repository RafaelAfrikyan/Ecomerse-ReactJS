import React from 'react'
import Navbar from './Navbar/Navbar'
import {Link, Outlet} from 'react-router-dom'

export default function Layout({openModal}) {
  return (
    <div>
        <header>
            <Navbar openModal={openModal} />
        </header>
        <Outlet />
        
    </div>
  )
}
