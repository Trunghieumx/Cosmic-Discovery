import './App.css';
import React, { useState } from 'react';
import Home from './components/Home';
import SunCard from './components/SunCard';
import MarsCard from './components/MarsCard';
import SaturnCard from './components/SaturnCard';
import MercuryCard from './components/MercuryCard';
import VenusCard from './components/VenusCard';
import JupiterCard from './components/JupiterCard';
import UranusCard from './components/UranusCard';
import NeptuneCard from './components/NeptuneCard';
import SolarPanel from './components/SolarPanel';
import Navbar from './components/Navbar';
import LickCard from './components/Lickcard';
import KeckCard from './components/KeckCard';
import ParanalCard from './components/ParanalCard'
import AreciboCard from './components/AreciboCard';
import Orion from "./components/OrionCard"
import Orioncard from './components/OrionCard';
import UrsaCard from './components/UrsaCard';
function App() {
    const [showHome, setShowHome] = useState(true);


    const handleHomeClick = () => {
        setShowHome(true); 
        setShowObser(false)
    };
    
    const [showObser, setShowObser] = useState(false);
    const handleObserClick = () =>{
        setShowHome(false)
        setShowObser(true);
    }

  return (
    <>

       {/* <Navbar/>
      {showHome && <Home />}
      {showObser && <LickCard />} */}
      {/* <LickCard/> */}
      {/* <KeckCard/> */}
      {/* <ParanalCard/> */}
      {/* <AreciboCard/> */}
      {/* <Orioncard/> */}
      <UrsaCard/>
      
    </>
  );
}

export default App;
