import { useState } from "react";
import './HaleCard.css'
function HaleCard() {
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
        <div className="hale-card">
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
                    Comet Hale-Bopp: Discovered in 1995, very bright and could be observed with the naked eye for 18 months (1996-1997). Orbital period ~2,500 years.</div>
                <div className="title">
                    Characteristic</div>
                <div className="content">
                    Very bright, visible to the naked eye for 18 months.
                    Orbital period ~2,500 years.
                    Large core (~60 km) and two tails (dust, gas).</div>
                    </div>
                <div className="infor2">
                    <div className="title">
                        Importance</div>
                    <div className="content">
                        Rare phenomenon: Cycle ~2,500 years.
                        Scientific discovery: Provides data on comet structures and tails.
                        Cultural influence: Causing widespread attention.
                    </div>

                </div>
                <div className="infor3">
                    <div className="title">
                        Outstanding</div>
                    <div className="content">
                        Very bright, visible to the naked eye for 18 months.
                        The cycle is ~2,500 years long, rare.
                        One of the most prominent comets of the 20th century.
                    </div>
                </div>
        </div>
        

    );
}

export default HaleCard;