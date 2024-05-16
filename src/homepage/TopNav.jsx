import React, { useState } from "react";
import "./css/nav.css";
import { Link } from "react-router-dom";

function TopNav() {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
      <header style={{ backgroundColor:'rgba(0, 0, 0, 5)'}}>
        <div className="navbar_header">
          <div className="logo">
            <Link to='/'>
              <a href="home">ECOYAAN</a>
              </Link>
          </div>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li>
              <a href="Sell">Sell on Ecoyaan</a>
            </li>
          </ul>
          <a href="Follow us" className="action_btn">Follow Us on Instagram</a>
          <div className="toggle_btn" onClick={toggleMenu}>
          <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
        </div>
        <div className={isOpen ? "dropdown_menu open" : "dropdown_menu"}>
        <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="AboutUs">About Us</a>
            </li>
            <li>
              <a href="Sell">Sell on Ecoyaan</a>
            </li>
            <li><a href="Follow us" className="action_btn">Follow Us on Instagram</a></li>
        </div>
      </header>
    </>
  );
}

export default TopNav;
