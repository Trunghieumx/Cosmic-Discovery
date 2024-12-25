import './JupiterCard.css'
import { useState } from 'react';
function JupiterCard() {
    const [Liked, setLiked] = useState(false); 
    const [Count, setCount] = useState(8386); 

    const handleLikeToggle = () => {
        if (Liked) {
            setCount((prev) => prev - 1); 
        } else {
            setCount((prev) => prev + 1); 
        }
        setLiked(!Liked); 
    };
    const [showVideo, setShowVideo] = useState(false); 

    const handlePlayClick = () => {
        setShowVideo(true); 
    };
    return ( 
        <div className="jupiter-card">
            <div className="like" onClick={handleLikeToggle} >
                {Liked ? (
                    <img src="./images/Heartfill.png" alt="Liked" />
                ) : (
                    <img src="./images/Heart.png" alt="Not liked" />
                )}
                <span className="count">{Count}</span>
            </div>
            <div className="video" onClick={handlePlayClick}>
                <img src="./images/Play.png" alt="Play" />
            </div>

            {showVideo && (
                <div className="video-overlay" onClick={() => setShowVideo(false)}>
                    <div className="video-container">
                        {/* Embed video youtbe */}
                        <iframe
                            width="800"
                            height="500"
                            src="https://www.youtube.com/embed/LinWJsangs4?si=OSqGzonl0ueaLV-_"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            )}
            <div className="planet-container">
                <img src="./images/PlanetJupiter.png" alt="" />
                <div className="blur"></div>
            </div>
            <div className="infor1">
                <div className="title">Distance from the Sun</div>
                <div className="content">Approximately 778 million km</div>
                <div className="title">Orbital Period</div>
                <div className="content">11.86 Earth years (1 year on Jupiter)</div>
                <div className="title">Rotation Period</div>
                <div className="content">About 10 hours</div>
                <div className="content">(Jupiter has the shortest day of all planets)</div>
            </div>
            <div className="infor2">
                <div className="title">DIAMETER</div>
                <div className="content">139,820 km</div>
                <div className="content">(11 times the diameter of Earth)</div>
                <div className="title">Average Temperature</div>
                <div className="content">-145°C (-234°F) at cloud tops</div>
                <div className="title">Gravity</div>
                <div className="content">2.5 times stronger than Earth's gravity</div>
            </div>
            <div className="infor5">
                <div className="title">Interior</div>
                <div className="content">Jupiter likely has a dense core of rock and metal, surrounded by a layer of metallic hydrogen</div>
                <div className="content">The core is encased by a thick layer of liquid hydrogen and helium</div>
                <div className="content">Jupiter generates more heat than it receives from the Sun due to slow gravitational contraction</div>
            </div>
            <div className="infor3">
                <div className="title">Atmosphere</div>
                <div className="content">Jupiter's atmosphere is primarily made of hydrogen (90%) and helium (10%), with traces of methane, ammonia, water vapor, and other compounds</div>
                <div className="content">It features multicolored cloud bands, caused by strong winds moving in opposite directions at different latitudes</div>
                <div className="content">The planet's iconic Great Red Spot is a massive storm, larger than Earth, that has been raging for at least 350 years</div>
            </div>
        </div>
     );
}

export default JupiterCard;