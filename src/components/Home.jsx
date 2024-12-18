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
import SunCard from './SunCard';

function Home() {

    const [showInfor, setShowInfor] = useState(true);

    const handleHideInfor = () => {
        setShowInfor(false);
        setShowSuncard(true);
    };
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
    const [showSuncard, setShowSuncard] = useState(false);
    return (
        <div className="container">

            <SolarPanel />

            <div className='content-container'>

                <div className="explore">
                    <div className='dropdown'>
                        <div className='button' >All stateline</div>
                        <div className='button'>Most viewed</div>
                    </div>

                    <Earth />

                    <Sun />

                    <Mars />

                    <Saturn />
                </div>
                {showInfor && (
                <div className="infor">
                    <div className="button-container">
                        <div className="button" onClick={handleBigBangClick}>Big Bang</div>
                        <div className="button" onClick={handleEvolutionClick}>The evolution of the Earth</div>
                    </div>
                    {showBigBang && <BigBang />}
                    {showEvolution && <Evolution />}    
                </div>
                )}
                {showSuncard && <SunCard />}
            </div>

            <Navbar hideInfor={handleHideInfor} />
        </div>
    );
}

export default Home;