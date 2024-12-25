import './NeptuneCard.css'
import { useState } from 'react';
function NeptuneCard() {
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
        <div className="neptune-card">
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
                <img src="./images/PlanetNeptune.png" alt="" />
                <div className="blur"></div>
            </div>
            <div className="infor1">
                <div className="title">Distance from the Sun</div>
                <div className="content">Approximately 4.5 billion km</div>
                <div className="title">Orbital Period</div>
                <div className="content">165 Earth years (1 year on Neptune)</div>
                <div className="title">Rotation Period</div>
                <div className="content">About 16 hours</div>
            </div>
            <div className="infor2">
                <div className="title">DIAMETER</div>
                <div className="content">49,244 km</div>
                <div className="content">(about 3.9 times Earth's diameter)</div>
                <div className="title">Average Temperature</div>
                <div className="content">-214°C (-353°F)</div>
                <div className="title">Gravity</div>
                <div className="content">About 114% of Earth's gravity</div>
            </div>
            <div className="infor5">
                <div className="title">Interior</div>
                <div className="content">Neptune, like Uranus, is classified as an "ice giant" due to its high concentration of water, ammonia, and methane ices</div>
                <div className="content">Beneath the atmosphere lies a thick mantle of water, ammonia, and methane ices, surrounding a rocky core</div>
            </div>
            <div className="infor3">
                <div className="title">Atmosphere</div>
                <div className="content">Neptune's atmosphere is primarily composed of hydrogen (80%), helium (19%), and traces of methane</div>
                <div className="content">The methane in the atmosphere absorbs red light and reflects blue, giving Neptune its vivid blue color</div>
            </div>
        </div>
     );
}

export default NeptuneCard;