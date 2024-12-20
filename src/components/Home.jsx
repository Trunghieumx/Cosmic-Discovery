import React from 'react'
import { useState } from 'react';
import './Home.css';
import Saturn from './Saturn'
import Earth from './Earth'
import Sun from './Sun'
import Mars from './Mars'
import SolarPanel from './SolarPanel'
import BigBang from './BigBang'
import Navbar from './Navbar'
import Evolution from './Evolution'


function Home() {

    const [showBigBang, setShowBigBang] = useState(true);

    const handleBigBangClick = () => {
        setShowBigBang(true); 
        setShowEvolution(false)
    };
    
    const [showEvolution, setShowEvolution] = useState(false);
    const handleEvolutionClick = () =>{
        setShowBigBang(false)
        setShowEvolution(true);
    }
    
    return (
        <div className="container">

            <SolarPanel />

            <div className='content-container'>

                <div className="explore">
                    <div className="button-container">
                        <div className='button' >All stateline</div>
                        <div className='button'>Most viewed</div>
                    </div>
                    <div className="planet-list">
                    <Earth />

                    <Sun />

                    <Mars />

                    <Saturn />
                    </div>
                </div>
                
                <div className="infor">
                    <div className="button-container">
                        <div className="button" onClick={handleBigBangClick}>Big Bang</div>
                        <div className="button" onClick={handleEvolutionClick}>The evolution of the Earth</div>
                    </div>
                    {showBigBang && <BigBang />}
                    {showEvolution && <Evolution />}    
                </div>
                
                
            </div>

            <Navbar />
        </div>
    );
}

export default Home;