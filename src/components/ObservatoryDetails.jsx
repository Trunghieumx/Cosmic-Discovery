import React from "react";

const ObservatoryDetails = () => {
  return (
    <div>
      <h2 className="details-title">Keck Observatory</h2>
      <img
        src="./assets/image/KeckObservatory.jpg"
        alt="Keck Observatory"
        className="details-image"
      />
      <p className="details-description">
        Đài thiên văn Keck nằm trên đỉnh Mauna Kea, Hawaii, với các kính thiên
        văn tiên tiến. Nó đóng vai trò quan trọng trong việc khám phá các hành
        tinh ngoài hệ mặt trời và các hiện tượng không gian xa xôi.
      </p>
    </div>
  );
};

export default ObservatoryDetails;
