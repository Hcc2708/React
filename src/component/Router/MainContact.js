import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function MainContact() {
  return (
    <div>
        <Header/>
        I am main contact
        <Outlet/>
    </div>
  )
}
