import React from "react";
import "./App.css"; // Đừng quên thêm CSS vào file này
import logo from "./assets/image/đài quan sát 1.png";
import img1 from "./assets/image/KeckObservatory.jpg";
import img2 from "./assets/image/Paranal.jpg";
import solar1 from "./assets/image/Sun.png"
import solar2 from "./assets/image/Mercury.png"
import solar3 from "./assets/image/Venus.png"
import solar4 from "./assets/image/Earth.png"
import solar5 from "./assets/image/Mars.png"
import solar6 from "./assets/image/Jupiter.png"
import solar7 from "./assets/image/Saturn.png"
import solar8 from "./assets/image/Uranus.png"
import solar9 from "./assets/image/Neptune.png"


const App = () => {
  return (
    <div className="app-container">
      <div className="solar-panel">
    <div className="solar-content">
        <img src={solar1} alt="Sun" className="sc1"></img>
        <img src={solar2} alt="Mercury" className="sc2"></img>
        <img src={solar3} alt="Venus" className="sc3"></img>
        <img src={solar4} alt="Earth" className="sc4"></img>
        <img src={solar5} alt="Mars" className="sc5"></img>
        <img src={solar6} alt="Jupiter" className="sc6"></img>
        <img src={solar7} alt="Saturn" className="sc7"></img>
        <img src={solar8} alt="Uranus" className="sc8"></img>
        <img src={solar9} alt="Neptune" className="sc9"></img>
    </div>
    <div className="orbit"></div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="filter-section">
            <div className="dropdown">
              <button className="dropdown-1">All stateline</button>
              <button className="dropdown-2">Most viewed</button>
            </div>
          </div>
          <div className="observatories">
            {/* Keck Observatory */}
            <div className="keck-card">
              <img src={img1} alt="Keck Observatory" className="keck-image" />
              <div className="keck-info">
                <h1>Keck Observatory</h1>
                <p>
                  Đặt tại núi Mauna Kea, thành lập năm 1993,là kính viễn <br />
                  vọng quang học lớn nhất thế giới (Keck I và II),đóng góp{" "}
                  <br />
                  vào nghiên cứu ngoại hành tinh và sóng hấp dẫn.
                </p>
                <button className="explore-button1">EXPLORE</button>
              </div>
            </div>

            {/* Paranal Observatory */}
            <div className="paranal-card">
              <img
                src={img2}
                alt="Paranal Observatory"
                className="paranal-image"
              />
              <div className="paranal-info">
                <h1>Paranal Observatory</h1>
                <p>
                  Nằm tại sa mạc Atacama, thuộc ESO, vận hành từ 1999, <br />
                  sở hữu Kính Viễn Vọng Rất Lớn Large Telescope (VLT), <br />
                  nổi bật trong nghiên cứu thiên hà và sự hình thành sao.
                </p>
                <button  className="explore-button">EXPLORE</button>
               
              </div>
            </div>
          </div>
        </div>

        {/* Main Image Section */}
        <div className="image-section">
          <img src={logo} alt="Main Observatory" className="main-image" />
        </div>
      </div>
    </div>
  );
};

export default App;
