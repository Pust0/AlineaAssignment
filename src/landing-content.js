import React, {useRef, useEffect} from "react";
import "./App.css";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import feature1 from "./Assets/feature1.gif";

function Content(){
   let app = useRef(null);
   let content = useRef(null);
   let tl = new TimelineLite()
   
   useEffect(()=>{
      //Content Variables
      const headlineFirst = content.children[0].children[0]
      const headlineSecond = headlineFirst.nextSibling;
      const contentP = content.children[1];

      //Removing the initial flash
      TweenMax.to(app, 0, {css: {visibility: "visible"}})

      //Content Animations
      tl.staggerFrom([headlineFirst.children, headlineSecond.children], 1 ,{
         y:100,
         ease: Power3.easeOut,
         delay: .7
      }, .1)
      .from(contentP, 0.8, {y: 20, opacity:0, ease:Power3.easeOut}, 1.4)
   },[tl])

   return (
      <div className="hero-section" ref={el => app = el}>
         <div className="hero-content-inner" ref={el => content = el}>
            <h1>
               <div className="hero-content-line">
                  <div className="hero-content-line-inner">Invest</div>
               </div>
               <div className="hero-content-line">
                  <div className="hero-content-line-inner">with Intention</div>
               </div>
            </h1>
            <p>A community for Investors</p>
         </div>
         <div className="landing-graphics">
            <img src={feature1} className="image-phone" alt="PhoneImage"/>
         </div>
      </div>
   )
}

export default Content