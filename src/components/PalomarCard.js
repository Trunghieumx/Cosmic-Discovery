import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./PalomarCard.css"
function PalomarCard() {
    const [Liked, setLiked] = useState(false);
    const [Count, setCount] = useState(8386);
    const [showMap, setShowMap] = useState(false); // Thêm state để kiểm soát hiển thị bản đồ
    
    // Coordinates for Lick Observatory
    const position = {
        lat: 33.3561, // Vĩ độ
        lng: -116.8643, // Kinh độ
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
        <div className="palomar-card">
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
                <div className="content">Palomar Mountain, San Diego County, California, USA.</div>
                <div className="title">Research goals</div>
                <div className="content">Explore structural features such as supermassive black holes, galactic disks, and spiral arms.</div>
                <div className="title">Facilities</div>
                <div className="content">Equipped with many advanced telescopes and research facilities serving modern scientific goals.</div>
                <div className="content">
                Using a giant Pyrex glass mirror, weighing more than 14 tons.</div>
            </div>
            <div className="infor2">
                <div className="title">Advanced technology</div>
                <div className="content">CCD camera: Record images with high resolution, helping to observe distant celestial objects.</div>
                <div className="content">Project ZTF: Detecting rapid phenomena such as supernovae and comets.</div>
            </div>
            <div className="infor3">
                <div className="title">Outstanding achievements</div>
                <div className="content">
                Discover cargo of asteroids and small stars, helping to expand understanding of the solar system.</div>
                <div className="content">
                Important contributions to the study of supernovae and fast cosmic phenomena.</div>
                <div className="content">
                Contributed to the discovery of exoplanets through spectroscopic methods and orbital observations.</div>
            </div>
            <div className="infor4">
                <div className="title">
                Manage</div>
                <div className="content">
                The Palomar Observatory is managed and operated by Caltech, collaborating with research organizations and universities to carry out scientific projects.</div>
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

export default PalomarCard;