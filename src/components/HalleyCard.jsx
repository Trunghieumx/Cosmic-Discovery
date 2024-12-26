import { useState } from "react";
import './HalleyCard.css'
function HalleyCard() {
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
    return (
        <div className="halley-card">
              <div className="like" onClick={handleLikeToggle}>
                {Liked ? (
                    <img src="./images/Heartfill.png" alt="Liked" />
                ) : (
                    <img src="./images/Heart.png" alt="Not liked" />
                )}
                <span className="count">{Count}</span>
            </div>
            <div className="cs-container">
            </div>
            <div className="infor1">
                <div className="title">Information</div>
                <div className="content">
                    Halley's Comet is one of the most prominent and recognizable comets, distinguished by its short period and importance in astronomical research.</div>
                <div className="title">
                    Characteristic</div>
                <div className="content">

                    Structure: Similar to other comets</div>
                <div className='content'>

                    Orbit: Comet Halley has a long elliptical orbit, moving from the far reaches of the solar system (near the Oort cloud) closer to the Sun. After approaching the Sun, it returns to the distant region.</div>
                <div className='content'>

                    Period: Comet Halley orbits the Sun every 76 years. The last time it appeared was in 1986, and the next time is expected to be in 2061.</div>
            </div>
            <div className="infor2">
                <div className="title">
                    Importance</div>
                <div className="content">

                    Historical Observation: Halley's Comet was recorded more than 2,000 years ago, by civilizations such as the Babylonians. This is the only comet that can be observed with the naked eye from Earth twice in a human lifetime.</div>


            </div>
            <div className="infor3">
                <div className="title">
                    Outstanding</div>
                <div className="content">

                    Scientific discovery: In 1986, the Giotto ship studied Halley, providing important data on structure and composition.</div>
            </div>
        </div>
    );
}

export default HalleyCard;