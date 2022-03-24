import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const token = localStorage.getItem('token')
  return (
      <div>
      <header id="header" className="fixed-top d-flex align-items-cente">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

          <h1 className="logo me-auto me-lg-0"><Link to={'/'}>Restaurantly</Link></h1>

          <a href="index.html" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><Link to={'/'} className="nav-link scrollto active">Home</Link></li>
              <li><Link to={'/about'} className="nav-link scrollto">About</Link></li>
              <li><Link to={'/menu'} className="nav-link scrollto">Menu</Link></li>
              <li><Link to={'/event'} className="nav-link scrollto">Events</Link></li>
              <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
              <li className="dropdown"><a href="#"><span>Dashboard</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  {
                    (token) ? 
                    <div><li><Link to={'/logout'}>Dashboard</Link></li> <li><Link to={'/logout'}>Profile</Link></li> <li><Link to={'/logout'}>Logout</Link></li></div> : <li><Link to={'/login'}>Login</Link></li>
                  }
                </ul>
              </li>
              <li><Link to={'contact'} className="nav-link scrollto">Contact</Link></li>
              <li><Link to={'cart'} className="nav-link scrollto">Cart</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <Link to={'/table/book'} className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</Link>

        </div>
      </header>
    </div>
  )
}
