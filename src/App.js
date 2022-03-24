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
import List from './Components/Modules/Menu/List';
import CategoryProduct from './Components/Modules/Menu/CategoryProduct';
import SingleProduct from './Components/Modules/Menu/SingleProduct';

import EventList from './Components/Modules/event/EventList';
import TableBook from './Components/Modules/booking/TableBook';
import Contact from './Components/Contact';
import Index from './Components/Modules/dashboard/Index';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';


export default function App() {


  return (
    <div>
      <BrowserRouter>    
        <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<List />}></Route>
            <Route path="/product/detail/:id" element={ <SingleProduct /> }></Route>
            <Route path="/category/product/:id" element={ <CategoryProduct /> }></Route>
            
            <Route path="/event" element={<EventList />}></Route>
            <Route path="/table/book" element={<TableBook />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            {/* dashboard */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/dashboard" element={<Index />}></Route>
          </Routes>
        <Footer/>
     </BrowserRouter>
    </div>
  )
}

