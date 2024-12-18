import './MercuryCard.css'
function MercuryCard() {
    return (
        <div className="mercury-card">
            <div className="planet-container">
                <img src="./images/PlanetMercury.png" alt="" />
                <div className="blur"></div>
            </div>
            <div className="infor1">
                <div className="title">Distance from the Sun</div>
                <div className="content">Approximately 57.91 million km</div>
                <div className="title">Orbital Period</div>
                <div className="content">88 Earth days (1 year on Mercury is very short)</div>
                <div className="title">Rotation Period</div>
                <div className="content">59 Earth days (1 day on Mercury is very long).</div>
            </div>
            <div className="infor2">
                <div className="title">DIAMETER</div>
                <div className="content">4,880 km (about 38% the size of Earth).</div>
                <div className="title">Average Temperature</div>
                <div className="content">Daytime: Up to 430°C (800°F)</div>
                <div className="content">Nighttime: Down to -180°C (-290°F)</div>
                <div className="title">Gravity</div>
                <div className="content">About 38% of Earth's gravity</div>
            </div>
            <div className="infor5">
                <div className="title">Surface</div>
                <div className="content">Mercury's surface is heavily cratered and similar to Earth's Moon, indicating it has been geologically inactive for billions of years.</div>
                <div className="content">Features include vast plains, cliffs (scarps), and craters such as the massive Caloris Basin, which is over 1,550 km wide.</div>
            </div>
            <div className="infor3">
                <div className="title">Atmosphere</div>
                <div className="content">Mercury has an extremely thin atmosphere, called an exosphere, composed of oxygen, sodium, hydrogen, helium, and potassium.</div>
                <div className="content">The exosphere is constantly replenished by solar wind and micrometeoroid impacts.</div>
                
            </div>
        </div>
    );
}

export default MercuryCard;