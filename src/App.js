import './App.css';
import React from 'react'
import { useState } from 'react';
import Home from './components/Home';
import VisitorCount from './components/VisitorCount';
import ScrollingSticker from './components/ScrollingSticker';
import Navbar from './components/Navbar';

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showObser, setShowObser] = useState(true);

  const handleShowHome = () => {
    setShowHome(true);
    setShowObser(false);
  };
  const handleShowObser = () => {
    setShowHome(false);
    setShowObser(true);
  };

  return (
    <>
      {showHome && <Home />}
      <VisitorCount />
      <Navbar />
      <ScrollingSticker />

    </>
  );
}

export default App;
