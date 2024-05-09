import React, { useContext } from "react";
import "./CardDetails.css";
import { AppContext } from "../AppProvider";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  
  const {myData} = useContext(AppContext);
  const useId = useParams();
  const provider = myData.find((e) => e.id == useId.id);

  return(
    <section className="cardDetails">
     <div className="w-width">
       <div className="cardDetails_img">
         <img src={provider.img} alt="_img" />
        </div>  
        <div className="cardDetails_text">
         <h2 className="fontStyle3">{provider.name}</h2>
         <div className="d-flex gap flex-wrap">
            { provider.height ? <span className="fontStyle8 card_height">Height :  {provider.height} m</span> : "" } 
            { provider.Lenght ? <span className="fontStyle8 card_height">Length : {provider.Lenght} km</span> : ""}
            <span className="fontStyle8 card_height">Country : {provider.country}</span>
         </div> 
         <p className="fontStyle8">{provider.desc}</p> 
        </div>
      </div>   
    </section>
  )    
}

export default CardDetails;