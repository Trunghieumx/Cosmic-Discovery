import { useState } from "react";
import './OrionCard.css'
function Orioncard() {
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
        <div className="orion-card">
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
                <div className="title">Location</div>
                <div className="content">
                    Orion is located near the celestial equator, so it can be observed from both the Northern and Southern hemispheres.</div>
                <div className="title">
                    Main stars</div>
                <div className="content">
                    Betelgeuse: A red giant, located at the hunter's left shoulder.</div>
                <div className='content'>
                    Rigel: A blue giant, located in the right leg.</div>
                <div className='content'>
                    Bellatrix: A bright blue star on the right shoulder.</div>
            </div>
            <div className="infor2">
                <div className="title">
                    Formation</div>
                <div className="content">
                    The stars in Orion form from clouds of gas and dust, especially from the Orion Nebula (M42), 1,344 light-years from Earth.</div>
                <div className="content">
                    Orion contains both young (Betelgeuse) and old (Betelgeuse, about to explode into a supernova) stars.</div>

            </div>
            <div className="infor3">
                <div className="title">
                    Meaning</div>
                <div className="content">
                    Orion is important in astronomical research, especially in star formation. In mythology, it symbolizes a great hunter and is a source of inspiration in many cultures.</div>
            </div>
        </div>
    );
}

export default Orioncard;