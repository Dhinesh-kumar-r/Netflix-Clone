import React from 'react'
import "../Css/landingpage.css";

import Land1 from './Land1'
import Land2 from './Land2'
import Land3 from './Land3'
import Land4 from './Land4'
import Land5 from './Land5'
import Accordion from './Land6';
import { accordionData } from './Land7';
import Land8 from './Land8';
import Footer from './Footer';



function LandingPage() {
  return (
    <>
    <Land1/>
    <Land2/>
    <Land3/>
    <Land4/>
    <Land5/>
    <div className="accordion">
    <span className='heading faq'>Frequently Asked Questions</span>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
          
        ))}
      </div>
    <Land8/>
    <Footer/>  
   
    </>
  )
}

export default LandingPage