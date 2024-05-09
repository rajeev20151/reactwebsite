import React from 'react';
import Home from './Component/Home';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Commen/Header';
import Footer from './Component/Commen/Footer';
import CardDetails from './Component/Commen/CardDetails';
import MyCategory from './Component/MyCategory';

function App() {
  return (
    <>  
    <Header />
    <Routes>
     <Route path='/' element={<Home category="wonder" />} /> 
     <Route path='/wonder' element={<MyCategory category="wonder" />} /> 
     <Route path='/building' element={<MyCategory category="Building" />} />
     <Route path='/river' element={<MyCategory category="River" />} /> 
     <Route path='/falls' element={<MyCategory category="Falls" />} /> 
     <Route path='/:category/:id' element={<CardDetails />} /> 
    </Routes>
    <Footer />
    </>
  );
}

export default App;
