import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>

    <nav className="navbar navbar-expand-lg p-3 sidebar-offcanvas text-white mx-auto">      
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas bg-success bg-lg-gradient offcanvas-start sidebar-off flex-lg-row align-items-center" tabIndex='-1' id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
      <div className="mx-5 text-center sidebar-offcanvas-link">
      
      
      <h1><Link to='/' className="navbar-brand mb-0 text-white">ZENITH</Link></h1>
      <h4><Link to='/'  className="navbar-brand text-white">FURNITURE</Link></h4>   
       
      </div>
      <hr className="d-lg-none d-xl-block "/>

        <ul className="navbar-nav text-white  align-items-center">
          <li className="nav-item px-lg-1">
            <a className="nav-link navbar-link sidebar-offcanvas-link" aria-current="page" href="#">PRODUCTS</a>
          </li>
          <li className="nav-item px-lg-3">
            <a className="nav-link navbar-link sidebar-offcanvas-link" href="#">FEATURED</a>
          </li>
          <li className="nav-item px-lg-3">
            <h5 className="p-0"><Link to='../cart' className="nav-link navbar-link sidebar-offcanvas-link">CART</Link></h5>
          </li>                            
        </ul>

       
      </div>
    </nav>
    
    <nav className="sidebar">
    <div className="mx-5 pt-2">
      
      <h1><Link to='/' className="navbar-brand text-white mb-0">ZENITH</Link></h1>
      <h4><Link to='/' className="navbar-brand">FURNITURE</Link></h4>      
      
    </div>  
      
      <hr className="d-lg-none d-xl-block" />       

      <div>
        <ul className="sidebar-nav text-white p-0 align-items-center mx-5 mt-5 fw-semibold">
          <li className="nav-item mb-3">
            <h5 className="p-0"><a className="nav-link navbar-link" aria-current="page" href="#">PRODUCTS</a></h5>
          </li>
          <li className="nav-item mb-3">
            <h5 className="p-0"><a className="nav-link navbar-link" href="#">FEATURED</a></h5>
          </li>
          <li className="nav-item mb-3">           
          <h5 className="p-0"><Link to='../cart' className="nav-link navbar-link sidebar-offcanvas-link" href="lg-#">CART</Link></h5>
          </li>                                           
        </ul>
  
      </div>
    
    </nav>
    </>

    
  )
}
