import React from "react";
import Card from "./Card";

const MyCategory = (props) => {
   return(
    <>
    <Card newCategory={props.category} />
    </>
   ) 
}

export default MyCategory;