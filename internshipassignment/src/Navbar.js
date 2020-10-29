import React from "react";
import "./App.css"
import logo from "./Assets/icon.png"

function Navbar(){
   return (
      <header>
         <img className="logo" src={logo} alt="Logo" />
         <a href="#top" className="LogoHeading">ALINEA INVEST</a>
         <ul className="navbarList">
            <li><a href="#top">Login</a></li>
            <li><a href="#top">Join Now</a></li>
         </ul>
      </header>
   )
}

export default Navbar;