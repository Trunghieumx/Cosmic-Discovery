import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./KittCard.css"
function KittCard() {
    const [Liked, setLiked] = useState(false);
    const [Count, setCount] = useState(8386);
    const [showMap, setShowMap] = useState(false); // Thêm state để kiểm soát hiển thị bản đồ
    
    // Coordinates for Lick Observatory
    const position = {
        lat: 31.9593, // Vĩ độ
        lng: -111.6006, // Kinh độ
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
        <div className="kitt-card">
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
            <div className="infor1">
                <div className="title">
                    Location</div>
                <div className="content">located in Kitt Peak, Arizona, USA.</div>
                <div className="title">Research goals</div>
                <div className="content">Study galaxies, stars, planets and other astronomical objects.</div>
                <div className="title">Facilities</div>
                <div className="content">Possessing a series of modern research facilities, including more than 20 telescopes with wave ranges from ultraviolet to infrared.</div>

            </div>
            <div className="infor2">
                <div className="title">Advanced technology</div>
                <div className="content">Kitt Peak uses advanced optical and infrared telescopes to observe the universe.</div>
                <div className="content">The automatic scanning system helps track astronomical objects with high accuracy.</div>
            </div>
            <div className="infor3">
                <div className="title">
                Outstanding achievements</div>
                <div className="content">
                Research at Kitt Peak contributes to the understanding of dark matter and dark energy.</div>
                <div className="content">
                The station has contributed to the discovery and research of extrasolar planets.</div>
                <div className="content">
                Provides a variety of educational programs and resources to the public about astronomy.</div>
            </div>
            <div className="infor4">
                <div className="title">
                Manage</div>
                <div className="content">
                Managed by NOIRLab (National Optical-Infrared Astronomy Research Laboratory).</div>
                <div className="content">
                International cooperation: It is a place for cooperation of many international organizations and research institutes.</div>
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

export default KittCard;