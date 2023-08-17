import React from "react";
import black from "../../assets/black.jpg";
import white from "../../assets/grey.jpg";
import blue1 from "../../assets/blue.png";
import blue2 from "../../assets/blue2.jpg"
import x from "../../assets/garnite1.jpg"
import "./product.css";
const Product = () => {
  return (
    <div className="product">
      <h3 className="producthead">Our Products</h3>
      <div className="images">
        <div className="mainbox1">
          <div className="maini1">
          <img src={black} alt="" srcset="" className="imi1" />
          <img src={blue1} alt="" srcset="" className="imi2" />
          </div>
          <div className="maini2">
          <img src={blue2} alt="" srcset=""  className="imi3"/>
          <img src={x} alt="" srcset="" className="imi4"/>
          </div>
        </div>
        <div className="mainbox2">
          <img src={white} alt="" srcset="" className="imgmain2" />
        </div>
      </div>
    </div>
  );
};

export default Product;
