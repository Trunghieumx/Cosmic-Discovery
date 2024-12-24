import React, { useEffect, useState } from 'react';
import './SolarSystem.css'
function SolarSystemView() {
    const [stars, setStars] = useState([]);
    useEffect(() => {
        const newStars = Array.from({ length: 1000 }, () => ({
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
        }));
        setStars(newStars);
    }, []);
    return (
        <div className="systemcontainer">

            {stars.map((star, index) => (
                <div
                    key={index}
                    className="star"
                    style={{
                        top: star.top,
                        left: star.left,
                    }}
                ></div>
            ))}

            <div className="sunsystem">
                <img src="./images/sunpanel.png" alt="Sun" />
            </div>
            <div className="mercurysystem"></div>
            <div className="venussystem"></div>
            <div className="earthsystem">
                <div className="moonsystem"></div>
            </div>
            <div className="marssystem"></div>
            <div className="jupitersystem"></div>
            <div className="saturnsystem"></div>
            <div className="uranussystem"></div>
            <div className="neptunesystem"></div>
            <div className="plutosystem"></div>
        </div>

    );
}

export default SolarSystemView;