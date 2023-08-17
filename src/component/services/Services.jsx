import React from 'react'
import "./services.css"

import granite1 from "../../assets/garnite1.jpg"
const Services = () => {
  return (
  <div className="services">
    <div className="innerbox">
      <div className="left1">
        <img src={granite1} alt="" srcset="" />
      </div>
      <div className="right1">
        <h2> Our Services</h2>
        <p>We are a trusted supplier of high-quality granite and marble specifically catering to hotels, resorts, and large-scale projects. Our extensive collection features an array of stunning colors, patterns, and finishes to elevate the visual appeal of your space.</p>
      </div>

    </div>
  </div>
  )
}

export default Services