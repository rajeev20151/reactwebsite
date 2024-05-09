import React, { useContext } from "react";
import "./Card.css";
import Item from "./Item";
import { AppContext } from "./AppProvider";

const Card = (props) => {
  
   const {myData} = useContext(AppContext); 

   return(
    <>
     <div className="my_card">
     {
        myData.length === 0 ? (<h1>data not found</h1>) : (
           myData.map((myItems,index) => {
            if(myItems.category === props.newCategory){
               return(
                  <Item key={index} id={myItems.id} name={myItems.name} img={myItems.img} country={myItems.country}
                   dec={myItems.desc} category={myItems.category} />
              )
            }else{
              return null;
            }
           }) 
        )
     }
     </div>
    </>
   ) 
}

export default Card;