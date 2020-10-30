import React from "react";
import Section1card from "./Section1card"
import "./App.css";

//Images props import
import s1a1 from "./Assets/s1a1.png"
import s1a2 from "./Assets/s1a2.png"
import s1a3 from "./Assets/s1a3.png"
import s1a4 from "./Assets/s1a4.png"
import s1a5 from "./Assets/s1a5.png"
import s1a6 from "./Assets/s1a6.png"



function Section1(){
   return(
      <div>
         <h2 className="Section1-heading">What is Alinea-Invest?</h2>
         <div className="Section1-cards">
            <Section1card image={s1a1} head="Community" para="We all need someone to lean on and investing is no different.
As part of our community, you get the support to embark and continue on your journey."/>
            <Section1card image={s1a2} head="Responsible Investing" para="Make your money moves matter!
Express your values and interests through your investments."/>
            <Section1card image={s1a3} head="Learning" para="We eliminate all the unnecessary financial jargon.
Learn as you go with our interactive mini capsules and before you know it, you’ll be a confident investor."/>
            <Section1card image={s1a4} head="Speedy Support" para="We have quick answers to all your investing questions."/>
            <Section1card image={s1a5} head="Custom Portfolios" para="Pre-packaged portfolios made for you so you dont have to. This will give you a headstart."/>
            <Section1card image={s1a6} head="Fractional Shares" para="Invest in any share with as little as $1."/>
         </div>
      </div>
   )
}

export default Section1