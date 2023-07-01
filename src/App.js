import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Router/Home";
import Contact from "./component/Router/Contact";
import About from "./component/Router/About";
import MainHome from "./component/Router/MainHome";
import News from "./component/project1/News";
import Todos from "./component/Project3Todo/Todos";
export default function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHome />}>
            <Route index element={<Home />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/news" element={<News />}></Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* <News/> */}
      <Todos></Todos>
    </div>
  );
}
