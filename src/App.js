import './App.css';
import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import VisitorCount from './components/VisitorCount';
import ScrollingSticker from './components/ScrollingSticker';
import Navbar from './components/Navbar';
import SolarSystemView from './components/SolarSystemView';
import Mercury from './components/Mercury';
import JupiterCard from './components/JupiterCard';
import EarthCard from './components/EarthCard';
import BookSearch from './BookSearch';
import Observatory from './components/Observatory';
import YouTubeVideos from './YouTubeVideos';
import About from './components/About';

function App() {
  
  return (
    <>
      <VisitorCount/>
      <ScrollingSticker/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obser" element={<Observatory />} />
        <Route path="/explore" element={<BookSearch />} />
        <Route path="/astronut" element={<About />} />
      </Routes>

    </>
  );
}

export default App;
