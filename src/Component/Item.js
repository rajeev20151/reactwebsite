import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup";


const Item = ({id,name,img,dec,country,category}) => {
   
   const [pops,setPops] = useState(false);

   const togglePopup = () => {
    setPops(!pops);
   }

   var decChange = dec.substring(0,300);  

   return(
    <>
    {pops ? <Popup toggle={togglePopup} id={id}  /> :  ""}
      <div className={`w-width d-flex align-center flex-wrap gap4 my_card_div
      ${id === id * 1 == 0 ? "flex_reverse" : ""}`}>
       <div className="card_img">
         <Link to={`/${category}/${id}`}><img src={img} alt="_img" /></Link>
         <div className="card_img_text fontStyle9" onClick={togglePopup}>
           <i className="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>  
       <div className="card_text">
        <div className="card_btn fontStyle9">{country}</div>
        <h2 className="fontStyle4">{name}</h2>
        <p className="fontStyle8">{decChange.length > 100 ? `${decChange}...` : decChange}</p>  
        <div className="fontStyle9"><Link className="primary_btn" to={`/${category}/${id}`}>Read More</Link></div>
       </div> 
      </div>
    </>
   ) 
}

export default Item;