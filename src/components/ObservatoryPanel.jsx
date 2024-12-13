import React, { useState } from "react";
import data from "../data.json";

const ObservatoryPanel = () => {
  const [observatories] = useState(data); // Lấy dữ liệu từ file JSON

  return (
    <div>
      <h2 className="panel-title"># Solar Panel</h2>
      <div className="observatory-list">
        {observatories.map((observatory) => (
          <div key={observatory.id} className="observatory-item">
            <h3 className="observatory-name">{observatory.name}</h3>
            <p className="observatory-description">
              {observatory.description}
            </p>
            <button className="explore-button">Explore</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObservatoryPanel;
