import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./AreciboCard.css"
function AreciboCard() {
    const [Liked, setLiked] = useState(false);
    const [Count, setCount] = useState(8386);
    const [showMap, setShowMap] = useState(false); // Thêm state để kiểm soát hiển thị bản đồ
    
    // Coordinates for Lick Observatory
    const position = {
        lat: 18.344167, // Vĩ độ
        lng: -66.752778 // Kinh độ
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
        setShowMap((prev) => !prev); // Toggle trạng thái hiển thị bản đồ
    };
    return (
        <div className="arecibo-card">
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
            <div className="ob-container">
            </div>
            <div className="infor1">
                <div className="title">Location</div>
                <div className="content">
                    Arecibo City, Puerto Rico, a territory of the United States.</div>
                <div className="content">
                    Located in a natural valley, using the local terrain to support the structure of the telescope.</div>
                <div className="title">
                    Facilities</div>
                <div className="content">
                    Reflector dish diameter: 305 meters, was the world's largest radio telescope until 2016 </div>
            </div>
            <div className="infor2">
                <div className="title">
                    Objectives and research</div>
                <div className="content">
                    Observe radio sources such as quasars, pulsars, and distant galaxies.</div>
                <div className="content">
                    Support projects searching for signals from alien civilizations.</div>
            </div>
            <div className="infor3">
                <div className="title">
                    Crashes and outages</div>
                <div className="content">
                    In 2020, the cables supporting the signal receiver broke, causing serious damage.</div>
                <div className="content">
                    On December 1, 2020, the entire telescope structure collapsed completely.</div>

            </div>
            <div className="infor4">
                <div className="title">
                    Heritage</div>
                <div className="content">
                    Although no longer active, Arecibo remains a major icon in the fields of radio astronomy and planetary radar.</div>
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

export default AreciboCard;