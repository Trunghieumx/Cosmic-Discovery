import './SaturnCard.css'
import { useState } from 'react';
function SaturnCard() {
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
        <div className="saturn-card">
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
                
                <div className="blur"></div>
            </div>
            <div className="infor1">
                <div className="title">Distance from the Sun</div>
                <div className="content">Approximately 1.4 billion km</div>
                <div className="title">Orbital Period</div>
                <div className="content">29.5 Earth years (1 year on Saturn)</div>
                <div className="title">Rotation Period</div>
                <div className="content">10 hours and 33 minutes</div>
                <div className="content">(a day on Saturn is very short)</div>
            </div>
            <div className="infor2">
                <div className="title">DIAMETER</div>
                <div className="content">120,536 km</div>
                <div className="content">(about 9.5 times the diameter of Earth)</div>
                <div className="title">Average Temperature</div>
                <div className="content">-178°C.</div>
                <div className="title">Gravity</div>
                <div className="content">About 91% of Earth's gravity.</div>
            </div>
            <div className="infor5">
                <div className="title">Surface</div>
                <div className="content">Saturn is a gas giant, meaning it does not have a solid surface. Instead, it has a thick atmosphere and a core of metal and rock.</div>
            </div>
            <div className="infor3">
                <div className="title">Atmosphere</div>
                <div className="content">Composed mainly of hydrogen (96%) and helium (3%).</div>
                <div className="content">Contains traces of methane, ammonia, and other gases.</div>
                <div className="content">Features strong winds, storms, and hexagonal cloud patterns at the north pole.</div>
            </div>
        </div>
    );
}

export default SaturnCard;