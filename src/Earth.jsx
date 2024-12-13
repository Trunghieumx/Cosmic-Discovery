import React from "react";
import "./S1.css";

const SpaceInfo = () => {
  return (
    <div className="space-info-container">
      {/* Background container */}
      <div className="orbit-header">O Orbit</div>

      {/* Earth Section */}
      <div className="earth-section">
        <div className="earth-title">Earth</div>
        <div className="earth-details">
          <p><strong>Distance from Sun:</strong> 149.6 million km</p>
          <p><strong>Orbital Period:</strong> 365.25 days</p>
          <p><strong>Solar Day:</strong> 24 hours</p>
          <p><strong>Atmospheric Composition:</strong> Nitrogen, oxygen, and carbon dioxide</p>
          <p><strong>Temperature Range:</strong> -89.2°C to 56.7°C (surface)</p>
          <p><strong>Equatorial Diameter:</strong> 12,742 km</p>
          <p><strong>Orbital Speed:</strong> 30 km/s</p>
          <p><strong>Earth's Mass:</strong> 5.9722 × 10<sup>24</sup> kg</p>
        </div>
      </div>

      {/* Moon Section */}
      <div className="moon-section">
        <div className="moon-title">Moon</div>
        <p><strong>Description:</strong> The Moon is Earth's one and only natural satellite.</p>
        <p><strong>Distance:</strong> 384,400 km</p>
        <p><strong>Size:</strong> 30% diameter of Earth</p>
      </div>

      {/* ISS Section */}
      <div className="iss-section">
        <div className="iss-title">International Space Station</div>
        <p>The ISS is a large space station that orbits Earth.</p>
        <p><strong>Collaborators:</strong> NASA, Roscosmos, ESA, JAXA, and CSA.</p>
      </div>
    </div>
  );
};

export default SpaceInfo;
