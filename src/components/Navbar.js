import React from 'react'
import "./navbar.css"
function Navbar() {
  return (
   <>
   <nav className="navbar">
        <i class="fa fa-bars" id='nav'></i>
        <img src="images/logoht.svg" className="brand-logo" alt=""/>
        <ul className="nav-links">
            <li className="nav-items"><a href="#">TV</a></li>
            <li className="nav-items"><a href="#">movies</a></li>
            <li className="nav-items"><a href="#">sports</a></li>
            <li className="nav-items"><a href="#">premium</a></li>
            <li className="nav-items kids"></li>
        </ul>
          
        <div className="right-container">
            <input type="text" className="search-box" placeholder="search"/>
            <button className="sub-btn">subscribe</button>
            <a href="#" className="login-link">login</a>
        </div>
        <div>
        <i class="fa fa-magnifying-glass" id='sear'></i>
            </div>
    </nav>
   </>

  )
}

export default Navbar