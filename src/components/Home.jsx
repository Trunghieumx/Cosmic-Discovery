import React from 'react'
import './Home.css';
import Saturn from'./Saturn'
import Earth from './Earth'
import Sun from './Sun'
import Mars from './Mars'
import SolarPanel from './SolarPanel'
import BigBang from './BigBang'
import Navbar from './Navbar'
function Home() {

    return (
        <div className="container">

            <SolarPanel/>

            <div className='content-container'>

                <div className="explore">
                    <div className='dropdown'>
                        <div className='button'>All stateline</div>
                        <div className='button'>Most viewed</div>
                    </div>
                    
                    <Earth/>

                    <Sun/>

                    <Mars/>

                    <Saturn/>
                </div>

                <div className="infor">
                    <div className="button-container">
                        <div className="button">Big Bang</div>
                        <div className="button">The evolution of the Earth</div>
                    </div>  
                    <BigBang/>
                </div>

            </div>
            
            <Navbar/>
        </div>
    );
}

export default Home;