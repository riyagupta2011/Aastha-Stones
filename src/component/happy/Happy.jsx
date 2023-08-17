import React from 'react'
import "./hapyy.css"
import b1  from "../../assets/bengalu.jpg";
import b2 from "../../assets/images.jpg";
import b3 from "../../assets/poornima.png"
import b4 from "../../assets/rambhag.jpg"
import b5 from "../../assets/semi.webp"

const Happy = () => {
  return (
   <div className="happy">
    
    <div className="upper">
        <h2>
            Our Happy Clients
        </h2>
        <p>"Aastha Stones provided us with top-quality granite and marble, transforming our hotel into a luxurious haven. Their exceptional service and competitive pricing made them the perfect choice for our project."</p>
    </div>
    <div className="lower">
   <img src={b1} alt="" srcset="" />
   <img src={b2} alt="" srcset="" />
   <img src={b3} alt="" srcset="" />
   <img src={b4} alt="" srcset="" />
   <img src={b5} alt="" srcset="" />
    </div>

   </div>
  )
}

export default Happy