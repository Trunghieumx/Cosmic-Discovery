import './EarthCard.css'
function EarthCard() {
    return (
        <div className="planet-card">
            <div className="planet-container">
                <img src="./images/PlanetEarth1.png" alt="" />
                <img src="./images/Orbit.png" alt="" />
                <img src="./images/Orbit2.png" alt="" />
                <img className="spot1" src="./images/Spot.png" alt="" />
                <img className="spot2" src="./images/Spot2.png" alt="" />
                <img className="moon" src="./images/Moon.png" alt="" />
                <img className="spacestation" src="./images/SpaceStation.png" alt="" />
            </div>
            <div className="infor1">
                <div className="title">DISTANCE FROM SUN</div>
                <div className="content">149.5 million km</div>
                <div className="title">ORBITAL PERIOD</div>
                <div className="content">365 days</div>
                <div className="title">SOLAR DAY</div>
                <div className="content">24 hours</div>
            </div>
            <div className="infor2">
                <div className="title">EQUATORIAL DIAMETERN</div>
                <div className="content">12.742 km</div>
                <div className="title">ORBITAL SPEED</div>
                <div className="content">30 km p/s</div>
                <div className="title">EARTH'S MASS</div>
                <div className="content">5.9722x10²⁴ kg</div>
            </div>
            <div className="infor3">
                <div className="title">TEMPERATURE RANGE</div>
                <div className="content">-89,2 °C to 56.7 °C (surface)</div> 
            </div>
            <div className="infor4">
                <div className="title">ATMOSPHERIC COMPOSITION</div>
                <div className="content">Nitrogen, oxygen and carbon dioxide</div> 
            </div>
            <div className="moon-info">
                <div className="head">Moon</div>
                <div className="content">The Moon is Earth's one and only natural satellite. Distance: 384,400 km. Size: 30x diameter of Earth.</div> 
            </div>
            <div className="spacestation-info">
                <div className="head">International Space Station</div>
                <div className="content">The I.S.S is a large space station assembled and maintained in low Earth orbit. Collaborators: NASA, Roscosmos, ESA, JAXA and CSA; (United States, Russia, Europe, Japan, Canada.) </div> 
            </div>
        </div>

    );
}

export default EarthCard;