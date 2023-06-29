import React from 'react'
import Header from './Header'
import { Outlet, useNavigate } from 'react-router-dom'

export default function MainHome() {
  // const navigate = useNavigate()
  // const previouspage = ()=>{
  //     navigate(-1)
  // }
return (
  <div>
      {/* <button onClick={previouspage}>Previous Page</button> */}
       <Header/>
       
      <Outlet/>
  </div>
)
}
