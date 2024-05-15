import React, { useState } from "react";
import "./css/nav.css";

function TopNav() {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
      <header>
        <div className="navbar_header">
          <div className="logo">
            <a href="home">ECOYAAN</a>
          </div>
          <ul className="links">
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="AboutUs">About Us</a>
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

// const toggleBtn = document.querySelector('.toggle_btn');
// const toggleBtnIcon = document.querySelector('.toggle_btn i');
// const dropDownMenu = document.querySelector('.dropdown_menu');

// toggleBtn.onclick = function () {
//   dropDownMenu.classList.toggle('open')
//   const isOpen = dropDownMenu.classList.contains('open');

//   toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
// }


export default TopNav;
