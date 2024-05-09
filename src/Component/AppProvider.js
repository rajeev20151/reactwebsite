import React, { createContext, useState } from "react";
import { data,nav } from "../Api";

const AppContext = createContext();

const AppProvider = ({children}) => {
 
   const [myData,setMyData] = useState(data);
   const [myNav,setMyNav] = useState(nav);    

   return(
     <>
      <AppContext.Provider value={{myData,myNav}}>
        {children}
      </AppContext.Provider>
     </>
   ) 
}

export {AppContext,AppProvider};