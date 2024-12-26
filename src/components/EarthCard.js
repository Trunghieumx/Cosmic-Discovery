import { useState } from 'react';
import './EarthCard.css';

function EarthCard() {
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
        <div className="planet-card">
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
                <img className="spinner" src="./images/PlanetEarth1.png" alt="" />
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