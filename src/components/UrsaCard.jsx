import { useState } from "react";
import './UrsaCard.css'
function UrsaCard() {
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
        <div className="ursa-card">
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
                    Northern Hemisphere: Best observed from latitude 90° North to 30° South.</div>
                <div className="title">
                    Main stars</div>
                <div className="content">
                    Dubhe: Brightest, pointing the way to the North Star, 123 light years away.</div>
                <div className='content'>
                    Merak: Together with Dubhe created the "Guiding Star", 79 light years away.</div>
                <div className='content'>
                    Phecda: At the bottom of "The Bucket", 83 light years away.</div>
            </div>
            <div className="infor2">
                <div className="title">
                    Formation</div>
                <div className="content">
                    The constellation Ursa Major formed from the Ursa Major Moving Group, consisting of stars born from a cloud of gas and dust ~500 million years ago.</div>

            </div>
            <div className="infor3">
                <div className="title">
                    Meaning</div>
                <div className="content">
                    Astronomy: Used as a navigational tool, with the "Guide Star" leading to the North Star.</div>
                <div className="content">Culture: Symbolizes Callisto in Greek mythology, is a bear in many cultures.</div>
            </div>
        </div>
    );
}

export default UrsaCard;