import './UranusCard.css'
function UranusCard() {
    return ( 
        <div className="uranus-card">
            <div className="planet-container">
                <img src="./images/PlanetUranus.png" alt="" />
                <div className="blur"></div>
            </div>
            <div className="infor1">
                <div className="title">Distance from the Sun</div>
                <div className="content">Approximately 2.87 billion km</div>
                <div className="title">Orbital Period</div>
                <div className="content">84 Earth years (1 year on Uranus)</div>
                <div className="title">Rotation Period</div>
                <div className="content">About 17 hours and 14 minutes</div>
            </div>
            <div className="infor2">
                <div className="title">DIAMETER</div>
                <div className="content">50,724 km</div>
                <div className="content">(about 4 times Earth's diameter)</div>
                <div className="title">Average Temperature</div>
                <div className="content">-224°C (-371°F).</div>
                <div className="content">making it the coldest planet in the Solar System</div>
                <div className="title">Gravity</div>
                <div className="content">About 89% of Earth's gravity</div>
            </div>
            <div className="infor5">
                <div className="title">Interior</div>
                <div className="content">Uranus is classified as an "ice giant" because its interior contains more "ices" (water, ammonia, and methane) than gas giants like Jupiter and Saturn</div>
                <div className="content">Beneath its atmosphere lies a thick layer of icy materials, surrounding a small rocky core</div>
            </div>
            <div className="infor3">
                <div className="title">Atmosphere</div>
                <div className="content">Uranus's atmosphere is composed primarily of hydrogen (82%) and helium (15%), with about 2% methane and traces of water and ammonia</div>
                <div className="content">The methane absorbs red light, giving the planet its pale blue-green color</div>
            </div>
        </div>
     );
}

export default UranusCard;