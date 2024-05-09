import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AppContext } from "../AppProvider";

const Header = () => {
 const {myNav} = useContext(AppContext);
 const [bar,setBar] = useState(false);

 const toggleClick = () => {
  setBar(!bar);
 }

 return(
   <header className="header">
    <div className="w-width d-flex justify-between align-center">
    <div className="logo fontStyle3"><Link to="/">wonder</Link></div>
     <nav className={`nav_bar ${bar ? 'act' : ""}`}>
      <div className="fa-solid fa-times close" onClick={toggleClick}></div>
      <ul className="nav_list d-flex gap5">
       {
        myNav.map((myData,index) => {
         return(
          <li className="fontStyle8 nav_item" key={index} onClick={toggleClick}><Link to={myData.path}>{myData.text}</Link></li>
         )
        })
       } 
      </ul>
     </nav>   
     <i className="fa-solid fa-bars open" onClick={toggleClick}></i>
    </div> 
   </header>
 )    
}

export default Header;