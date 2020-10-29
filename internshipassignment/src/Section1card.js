import React from "react";
import "./App.css";

function Section1card({image, head, para}){
   return(
      <div className="Section1card">
         <img src={image} alt="image"/>
         <h3>{head}</h3>
         <p>{para}</p>
      </div>
   )
}

export default Section1card