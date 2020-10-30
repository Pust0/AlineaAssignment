import React from "react";
import Navbar from "./Navbar";
import Content from "./landing-content";
import Section1 from "./Section1";
import Section2 from "./Section2";
import "./App.css";

function App(){

  return (
  <div className="PageWrapper">
    <div className="landing">
      <Navbar/>
      <Content/>
    </div>
    <div>
      <Section1/>
      <Section2/>
    </div>
    <div className="footer"></div>
  </div>

  )
}

export default App;