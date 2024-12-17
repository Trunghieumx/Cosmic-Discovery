import React from 'react'
import { useState, useEffect } from 'react';
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
    // State để kiểm soát việc hiển thị BigBang
    const [showBigBang, setShowBigBang] = useState(true);
    // Hàm xử lý khi nhấn nút Big Bang
    const handleBigBangClick = () => {
        setShowBigBang(true); // Hiển thị component BigBang
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
                    <div className='dropdown'>
                        <div className='button' >All stateline</div>
                        <div className='button'>Most viewed</div>
                    </div>

                    <Earth />

                    <Sun />

                    <Mars />

                    <Saturn />
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