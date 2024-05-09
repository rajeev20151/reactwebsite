import React, { useContext } from "react";
import "./popup.css";
import { AppContext } from "./AppProvider";

const Popup = (props) => {

   const {myData} = useContext(AppContext);

   return(
    <>
     <div className="popup">
      <i className="fa fa-times closedPopup" onClick={props.toggle}></i>
      <div className="popup_list w-width">
         {
          myData.length === 0 ? (<h1>data not found</h1>) : (
            myData.map((spider) => {
              if(spider.id == props.id){
             return(
              spider.list.map((items,index) => {
                return(
                  <div className="popup_item" key={index}>
                   <img src={items.image} alt="_img" />   
                  </div> 
                )
               })
             )
            }else{
              return null;
            }
            })
          )
         }
        
       </div>  
     </div>
    </>
   ) 
}

export default Popup;