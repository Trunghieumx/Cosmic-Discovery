import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./KeckCard.css"
function KeckCard() {
    const [Liked, setLiked] = useState(false);
    const [Count, setCount] = useState(8386);
    const [showMap, setShowMap] = useState(false); // Thêm state để kiểm soát hiển thị bản đồ
    
    // Coordinates for Lick Observatory
    const position = {
        lat: 19.8266, // Vĩ độ
        lng: -155.4740 // Kinh độ
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
        <div className="keck-card">
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
                <div className="title">
                    Location</div>
                <div className="content">Mauna Kea peak, on the island of Hawaii, USA.</div>
                <div className="title">Research goals</div>
                <div className="content">Discovering extrasolar planets</div>
                <div className="title">Facilities</div>
                <div className="content">The Keck telescopes are housed in large domes.</div>
                <div className="content">
                Main mirror diameter: 10 meters, made up of 36 hexagonal mirrors assembled.</div>
            </div>
            <div className="infor2">
                <div className="title">Advanced technology</div>
                <div className="content">Adaptive optics help minimize the blurring effect caused by Earth's atmosphere.</div>
                <div className="content">Combining two telescopes via interferometry, creating higher resolution observations.</div>
            </div>
            <div className="infor3">
                <div className="title">
                Outstanding achievements</div>
                <div className="content">
                Discover and research extrasolar planetary systems.</div>
                <div className="content">
                Observe the movement of stars around the supermassive black hole at the center of the Milky Way.</div>
                <div className="content">
                Detailed study of galaxies in the early universe.</div>
            </div>
            <div className="infor4">
                <div className="title">
                Manage</div>
                <div className="content">
                The Keck Observatory is operated by the Keck Observatory Institute, an alliance between:</div>
                <div className="content">
                University of California (UC).</div>
                <div className="content">
                California Institute of Technology (Caltech).</div>
                <div className="content">NASA</div>
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

export default KeckCard;