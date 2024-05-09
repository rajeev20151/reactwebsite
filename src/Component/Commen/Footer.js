import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
 return(
  <footer className="footer">
    <div className="w-width">
      <div className="footer_logo">
       <h3 className="fontStyle3"><Link to="/">Wonder</Link></h3> 
      </div>
    </div>
  </footer> 
 )    
}

export default Footer;