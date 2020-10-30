import React from "react";
import "./App.css";

function Section2(){
   return(
      <div className="Section2">
         <div className="outerSection2">
            <div className="midSection2">
               <h2 className="Section2-mainHeading">Presented In.</h2>
               <h4 className="Section2-subHeading">We have been featured in</h4>
               <div className="carousel">
                  <div className="leftCarouselComp"></div>
                  <div className="mainCarouselComp">
                     <div className="slide-track">
                        <div className="slide-image">
                           <img src="https://investedmillennial.com/wp-content/uploads/2020/10/cropped-Logo_Invested-Millennial.png" loading="lazy" className="slide-image-img"/>
                        </div>
                        <div className="slide-image">
                           <img src="https://thepowerthread.com/wp-content/uploads/2020/09/Logo-Type-for-Website-1024x71.png" loading="lazy" className="slide-image-img"/>
                        </div>
                        <div className="slide-image">
                           <img src="https://investedmillennial.com/wp-content/uploads/2020/10/cropped-Logo_Invested-Millennial.png" loading="lazy"  className="slide-image-img"/>
                        </div>
                        <div className="slide-image">
                           <img src="https://thepowerthread.com/wp-content/uploads/2020/09/Logo-Type-for-Website-1024x71.png" loading="lazy"  className="slide-image-img"/>
                        </div>
                        <div className="slide-image">
                           <img src="https://investedmillennial.com/wp-content/uploads/2020/10/cropped-Logo_Invested-Millennial.png" loading="lazy" className="slide-image-img"/>
                        </div>
                        <div className="slide-image">
                           <img src="https://thepowerthread.com/wp-content/uploads/2020/09/Logo-Type-for-Website-1024x71.png" loading="lazy"  className="slide-image-img"/>
                        </div>
                        <div className="slide-image">
                           <img src="https://investedmillennial.com/wp-content/uploads/2020/10/cropped-Logo_Invested-Millennial.png" loading="lazy" className="slide-image-img"/>
                        </div>
                     </div>
                  </div>
                  <div className="rightCarouselComp"></div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default Section2