import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./LickCard.css";

function LickCard() {
    const [Liked, setLiked] = useState(false);
    const [Count, setCount] = useState(8386);
    const [showMap, setShowMap] = useState(false); // Thêm state để kiểm soát hiển thị bản đồ
    
    // Coordinates for Lick Observatory
    const position = {
        lat: 37.3410, // Latitude of Lick Observatory
        lng: -121.6490, // Longitude of Lick Observatory
    };

    const handleLikeToggle = () => {
        if (Liked) {
            setCount((prev) => prev - 1);
        } else {
            setCount((prev) => prev + 1);
        }
        setLiked(!Liked);
    };

    const handleMapClick = () => {
        setShowMap(true); // Hiển thị bản đồ khi nhấn vào icon map
    };

    return (
        <div className="lick-card">
            <div className="like" onClick={handleLikeToggle}>
                {Liked ? (
                    <img src="./images/Heartfill.png" alt="Liked" />
                ) : (
                    <img src="./images/Heart.png" alt="Not liked" />
                )}
                <span className="count">{Count}</span>
            </div>
            <div className="video">
                <img src="./images/iconmap.png" alt="Map" onClick={handleMapClick} />
            </div>
            <div className="ob-container"></div>
            <div className="infor1">
                <div className="title">Location</div>
                <div className="content">
                    The summit of Mount Hamilton, in the Diablo Range, near San Jose, California, USA.
                </div>
                <div className="content">
                    Altitude: 1,283 meters above sea level.
                </div>
                <div className="title">History</div>
                <div className="content">Established: In 1888, funded by businessman James Lick.</div>
            </div>
            <div className="infor2">
                <div className="title">Facilities</div>
                <div className="content">
                    Diameter: 36 inches (91 cm), largest in the world at the time of inauguration.
                </div>
                <div className="title">Objectives and research</div>
                <div className="content">
                    Observe and study stars, star clusters, and galaxies.
                </div>
                <div className="content">
                    Study the formation and evolution of galaxies.
                </div>
            </div>
            <div className="infor3">
                <div className="title">Outstanding achievements</div>
                <div className="content">
                    Analyze the movements of stars and galaxies, helping to strengthen the theory of the expansion of the universe.
                </div>
            </div>
            <div className="infor4">
                <div className="title">Manage</div>
                <div className="content">
                    Now part of the University of California Observatory system, along with stations such as Keck in Hawaii.
                </div>
            </div>

            {/* Hiển thị bản đồ khi showMap là true */}
            {showMap && (
                <div className="map-container">
                    <LoadScript googleMapsApiKey="AIzaSyD8kDUOgBxf1NPAKSa3Df6rR-CfDBNELc4">
                        <GoogleMap
                            mapContainerStyle={{
                                width: "80%",
                                height: "80%", // Đảm bảo bản đồ chiếm toàn bộ không gian
                            }}
                            center={position}
                            zoom={15}
                        >
                            <Marker position={position} />
                        </GoogleMap>
                    </LoadScript>
                </div>
            )}
        </div>
    );
}

export default LickCard;
