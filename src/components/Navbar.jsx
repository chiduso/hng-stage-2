import React from "react"
import { Link } from "react-router-dom"


export default function Navbar(){
  return (
      <nav className="navbar navbar-expand-lg px-lg-5 px-sm-3 nav text-white mx-auto">    
      <a className="navbar-brand text-white" href="#">ZENITH</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas bg-success bg-lg-gradient offcanvas-end flex-lg-row align-items-center" tabIndex='-1' id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
        <ul className="navbar-nav text-white mx-auto align-items-center">
          <li className="nav-item px-lg-3">
            <a className="nav-link navbar-link" aria-current="page" href="#">HOME</a>
          </li>
          <li className="nav-item px-lg-3">
            <a className="nav-link navbar-link" href="#">SHOP</a>
          </li>
          <li className="nav-item px-lg-3">
            <a className="nav-link navbar-link" href="#">PRODUCTS</a>
          </li>          
          <li className="nav-item px-lg-3">
            <a className="nav-link navbar-link" href="#">BLOG</a>
          </li>          
          <li className="nav-item px-lg-3">
            <a className="nav-link navbar-link" href="#">CONTACT</a>
          </li>          
        </ul>

        <hr className="d-lg-none d-xl-block"/>
        <ul className="navbar-nav ms-lg-auto align-items-center">
          <li className="nav-item a">
            <a href="#" className="nav-link fw-semibold navbar-link">              
              <img src="assets/img/search.png" alt="" />            
            </a>
          </li>
          <li className="nav-item align-items-center">
            <Link to="cart" className="nav-link fw-semibold navbar-link">              
              <img src="assets/img/cart.png" alt="" className=""/>            
            </Link>
          </li>
                        
        </ul>
      </div>
      </nav>
  )
}
