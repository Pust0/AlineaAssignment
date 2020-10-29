import React from "react";
import Section1card from "./Section1card"
import "./App.css";
const assets = require('./assets')

function Section1(){
   return(
      <div>
         <h2 className="Section1-heading">What is Alinea-Invest?</h2>
         <div className="Section1-cards">
            <Section1card image="" head="Community" para="We all need someone to lean on and investing is no different.
As part of our community, you get the support to embark and continue on your journey."/>
            <Section1card image="" head="Responsible Investing" para="Make your money moves matter!
Express your values and interests through your investments."/>
            <Section1card image="" head="Learning" para="We eliminate all the unnecessary financial jargon.
Learn as you go with our interactive mini capsules and before you know it, you’ll be a confident investor."/>
            <Section1card image="" head="Speedy Support" para="We have quick answers to all your investing questions."/>
            <Section1card image="" head="Custom Portfolios" para="Pre-packaged portfolios made for you so you dont have to. This will help you for a headstart."/>
            <Section1card image="" head="Fractional Shares" para="Invest in any share with as little as $1."/>
         </div>
      </div>
   )
}

export default Section1