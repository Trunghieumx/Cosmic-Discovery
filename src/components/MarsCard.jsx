import './MarsCard.css'
function MarsCard() {
    return (
        <div className="mars-card">
            <div className="planet-container">
                <img src="./images/PlanetMars.png" alt="" />
                <div className="blur"></div>
            </div>
            <div className="infor1">
                <div className="title">Distance from the Sun</div>
                <div className="content">Approximately 227.9 million km</div>
                <div className="title">Orbital Period</div>
                <div className="content">687 Earth days(1 year on Mars)</div>
                <div className="title">Rotation Period</div>
                <div className="content">24 hours and 37 minutes</div>
                <div className="content">(similar to a day on Earth)</div>
            </div>
            <div className="infor2">
                <div className="title">DIAMETER</div>
                <div className="content">6,779 km (about half the size of Earth)</div>
                <div className="title">Average Temperature</div>
                <div className="content">-63°C (ranging from -140°C to 20°C)</div>
                <div className="title">Gravity</div>
                <div className="content">About 38% of Earth's gravity</div>
            </div>
            <div className="infor3">
                <div className="title">Surface</div>
                <div className="content">Mars' surface features include volcanoes, valleys, deserts, and polar ice caps.</div>
                <div className="content">Olympus Mons: The largest volcano in the Solar System, nearly three times the height of Mount Everest.</div>
                <div className="content">Valles Marineris: A canyon system about 4,000 km long and up to 7 km deep</div>
            </div>
            <div className="infor5">
                <div className="title">Atmosphere</div>
                <div className="content">Thin, mostly composed of carbon dioxide (about 95%), with very little oxygen and nitrogen</div>
                <div className="content">Atmospheric pressure is only about 0.6% of Earth's</div>
            </div>
        </div>
    );
}

export default MarsCard;