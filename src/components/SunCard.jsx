import './SunCard.css'
function SunCard() {
    return ( 
        <div className="sun-card">
            <div className="planet-container">
                <img src="./images/PlanetSun.png" alt="" />
                <div className="blur"></div>
            </div>
            <div className="infor1">
                <div className="title">DISTANCE FROM EARTH</div>
                <div className="content">149.5 million km</div>
                <div className="title">AGE</div>
                <div className="content">4.6 billion years</div>
                <div className="title">TYPE OF STAR</div>
                <div className="content">Yellow Dwarf</div>
            </div>
            <div className="infor2">
                <div className="title">DIAMETER</div>
                <div className="content">1.39 million km</div>
                <div className="title">ORBITAL SPEED</div>
                <div className="content">30 km p/s</div>
                <div className="title">SUN’S MASS</div>
                <div className="content">1.989 × 10³⁰ kg</div>
            </div>
            <div className="infor3">
                <div className="title">Role of the Sun</div>
                <div className="content">Provides Energy</div>
                <div className="content">Influences Weather and Climate</div>
                <div className="content">Ecosystem Support</div>
            </div>
            <div className="infor4">
                <div className="title">ATMOSPHERIC COMPOSITION</div>
                <div className="content">73% Hydrogen, 25% Helium</div>
            </div>
            <div className="infor5">
                <div className="title">TEMPERATURE RANGE</div>
                <div className="content">Surface : 5,500 °C</div>
                <div className="content">Core : 15 million °C</div>
            </div>
        </div>
     );
}

export default SunCard;