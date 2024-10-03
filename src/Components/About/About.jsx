import React from 'react'
import './About.css'
import extra1 from '../../assets/img/extra1.webp'
const About = () => {
  return (
    <div>


      
      <div className="about-us" id="about_id">
  <div className="about-us-text">
    <p className="subheader">HISTORY</p>
    <p className="header">ABOUT US</p>
    <p className="about-us-header">
     We have access to exclusive deals and packages, helping travelers save time and money
    </p>

    <p className="about-us-info">
     <span>T</span>ravel is a business that assists clients in planning and booking their trips. They provide services such as itinerary planning, flight and hotel reservations, transportation arrangements, and guided tours.
    </p>
    <button className="main-button">FIND MORE</button>
  </div>
  <div className="about-us-img-border">
    <img src={extra1} className="about-us-img" />
  </div>
</div>
    </div>
  )
}

export default About
