import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import Home from "./Components/Home";
import About from './Components/About';

export default function App() {
  return (
    <div>
      <BrowserRouter>    
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  )
}

