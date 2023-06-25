import React from 'react'
import ApiFetching from './component/ApiFetching'
// import { BrowserRouter, Router, Route} from "react-router-dom";
// import Home from './component/Router/Home'
// import Contact from './component/Router/Contact'
// import About from './component/Router/About'
// import Profile from './component/Router/Profile'
export default function App() {
  return (
    <div>
      {/* <BrowserRouter>
      <Router>
        <Route  path="/" element={<Home/>} />
        <Route  path="contact" element={<Contact />} />
        <Route  path="about" element={<About />} />
        <Route  path="profile" element={<Profile />} />
      </Router>
    </BrowserRouter> */}
    <ApiFetching></ApiFetching>
     </div>
  )
}
