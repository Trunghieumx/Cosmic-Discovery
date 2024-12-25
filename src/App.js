import './App.css';
import React from 'react'
import { useState } from 'react';
import Home from './components/Home';
import VisitorCount from './components/VisitorCount';
import ScrollingSticker from './components/ScrollingSticker';
import Navbar from './components/Navbar';
import SolarSystemView from './components/SolarSystemView';
import Mercury from './components/Mercury';
import JupiterCard from './components/JupiterCard';
import EarthCard from './components/EarthCard';
import BookSearch from './BookSearch';
import ObserCard from './components/ObserCard';
function App() {
  
  return (
    <>
      <Home />
      <VisitorCount />
      <ScrollingSticker /> 
      {/* <BookSearch/> */}
    
    </>
  );
}

export default App;
