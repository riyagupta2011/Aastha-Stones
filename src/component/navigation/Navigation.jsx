import React from 'react'
import "./navigation.css"

import pic1 from "../../assets/pic6.jpg"
const Navigation = () => {
  return (
    <>
    <div className="navigation">
        <div className="left">Aastha Stones</div>
        {/* <div className="right">
           <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Product</li>
            <li>Contact</li>
          
           </ul>
          
        </div> */}
    </div>
    <img src={pic1} alt="Background Image"></img>
    <div className="text">
        <h2>Aastha Stones</h2>
        <p>Fine Quality Marbles and Granite Suppliers all over India</p>
    </div>
    </>
  )
}

export default Navigation