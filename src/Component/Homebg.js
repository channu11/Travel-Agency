import React from 'react'
// import Navbar from './Navbar'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import Destination from '../Pages/Destination';
import Shop from '../Pages/Shop';


function Homebg() {
  return (
    <>
      <section className='bg1'>

        <video src="https://demo.themexpert.com/wordpress/valley/tour-classic/wp-content/uploads/sites/5/2019/07/hero-video.mp4"
        className='object-fit-cover'
        id="myVideo"
        playsinline
        autoPlay
        muted
        loop/>

             
     <nav className="navbar navbar-expand-lg  pap">
  <div className="container">
    <Link className="navbar-brand" to="/home"><img className='logo' src={require('../Images/logo2.png')}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Travel Agency</a></li>
            <li><a className="dropdown-item" href="#">Summer Holiday</a></li>
          
            <li><a className="dropdown-item" href="#">Destination showcase</a></li>
            <li><a className="dropdown-item" href="#">City tours</a></li>
            <li><a className="dropdown-item" href="#"> Tour classic</a></li>
            <li><a className="dropdown-item" href="#">tour Package</a></li>
          
          </ul>
          
        </li>
       
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to='/destination'role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Destination
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Most popular</a></li>
            <li><a className="dropdown-item" href="#">Popular of Europe </a></li>
          
            <li><a className="dropdown-item" href="#">Destination of Group</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to='/shop' role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">single Product</a></li>
            <li><a className="dropdown-item" href="#">Variation Product</a></li>
           
            <li><a className="dropdown-item" href="#">Popular T-Shirt</a></li>
            <li><a className="dropdown-item" href="#">Premium Quality</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Region Blog
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Switzerland</a></li>
            <li><a className="dropdown-item" href="#">Oceania </a></li>
           
            <li><a className="dropdown-item" href="#">Africa</a></li>
            <li><a className="dropdown-item" href="#">Canada</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Blog</a>
          
        </li>
      </ul>
     
    </div>
  </div>
  <div className='cart '>
<i class="bi bi-cart-check  "></i>
</div>

</nav>
         <div className='bg1h   position-absolute'>
           <h1>Make Your Life Extraordinary!</h1>
           <button type="button" class="button1 elementor-button-wrapper">Find Destination</button>
      
           </div>
      </section>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
     
    </>
  )
}

export default Homebg
