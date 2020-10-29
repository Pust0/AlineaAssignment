import React from "react";
import "./App.css"
import logo from "./Assets/icon.png"

function Navbar(){
   return (
      <div className="navbar">
         <img className="logo" src={logo} alt="Logo" />
         <a href="#" className="LogoHeading">ALINEA INVEST</a>
         <ul className="navbarList">
            <li><a href="#">Login</a></li>
            <li><a href="#">Join Now</a></li>
         </ul>
      </div>
   )
}

export default Navbar;