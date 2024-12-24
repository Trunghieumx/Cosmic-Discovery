import './App.css';
import React from 'react'
import { useState } from 'react';
import Home from './components/Home';
import VisitorCount from './components/VisitorCount';
import ScrollingSticker from './components/ScrollingSticker';
import Navbar from './components/Navbar';
import SolarSystemView from './components/SolarSystemView';
import Mercury from './components/Mercury';

function App() {
  
  return (
    <>
      <Home />
      <VisitorCount />
      <ScrollingSticker />
    </>
  );
}

export default App;
