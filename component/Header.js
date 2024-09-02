import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <div className="header">
          <div className="logo-container">
              <img className="logo" src="https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg"></img>
          </div>
          <div className="nav-items">
              <ul>
                  <Link to='/'>Home </Link>
                  <Link to='/about'>About Us</Link>
                  <Link to='/contact'>Contact Us</Link>
                  <Link to='/cart'>Cart </Link>
              </ul>
          </div>
      </div>
  )
} 
export default Header;

