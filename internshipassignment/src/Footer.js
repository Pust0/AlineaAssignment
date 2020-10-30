import React from "react";
import "./App.css";

function Footer(){
   return(
      <div className="Footer-container">
         <div className="Footer-links">
            <a className="Footer-link" href="#top">Contact Us</a>
            <div className="Footer-breakpoint">|</div>
            <a className="Footer-link" href="#top">Legal Stuff</a>
            <div className="Footer-breakpoint">|</div>
            <a className="Footer-link" href="#top">Privacy Policy</a>
            <div className="Footer-breakpoint">|</div>
            <a className="Footer-link" href="#top">FAQ</a>
            <div className="Footer-breakpoint">|</div>
            <a className="Footer-link" href="#top">Subscribe</a>
         </div>
         <div className="Footer-copyrightMessage">CopyRight All Rights Reserved</div>
      </div>
   )
}

export default Footer