import { useState } from "react";
import './ScorpioCard.css'
function ScorpioCard() {
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
        <div className="scorpio-card">
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
                    Southern Hemisphere: The constellation Scorpio is easily visible from Southern latitudes (40° South and below).</div>
                <div className="content">Northern Hemisphere: Observable from southern areas (40° North or less), especially in summer and fall.</div>
                <div className="title">
                    Main stars</div>
                <div className="content">
                    Antares: Brightest star, red giant, about 600 light years from Earth.</div>
                <div className='content'>
                    Shaula: Blue giant star, located in the scorpion's tail, 700 light years away.</div>
                <div className='content'>
                    Lesath: Bright star near Shaula, 700 light years away.</div>
            </div>
            <div className="infor2">
                <div className="title">
                    Formation</div>
                <div className="content">
                    The Scorpio constellation is formed from stars of different origins, mainly from clouds of gas and dust in the Milky Way.</div>
                <div className="content">
                    The stars in this constellation do not belong to the same star group.</div>

            </div>
            <div className="infor3">
                <div className="title">
                    Meaning</div>
                <div className="content">
                    The constellation Scorpio symbolizes strength and power. In Greek mythology, it represents the scorpion that killed the god Orion, creating an eternal confrontation between these two constellations.</div>
            </div>
        </div>
    );
}

export default ScorpioCard;