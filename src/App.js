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
import img3 from "./assets/image/Arecibo.png"
// import ic1 from "./assets/image/Home Icon.png"
// import ic2 from "./assets/image/Search Icon.png"
// import ic3 from "./assets/image/World Icon.png"
// import ic4 from  "./assets/image/Map Icon.png"
// import ic5 from  "./assets/image/Astronaut.png"
import ic6 from "./assets/image/iconearth.png"
import ic7 from "./assets/image/Vector.png"
import Background from "./Background";
// import bg from "./Background"


// const  = () => {
//   return (
//     <div>
//       <h2>Video Example</h2>
//       <video width="600" controls>
//         <source src="your-video-file.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };
const App = () => {
  return (
    // <div className="app-container">
    //   <div className="solar-panel">
    //     <div className="solar-content">
    //       <img src={solar1} alt="Sun" className="sc1"></img>
    //       <img src={solar2} alt="Mercury" className="sc2"></img>
    //       <img src={solar3} alt="Venus" className="sc3"></img>
    //       <img src={solar4} alt="Earth" className="sc4"></img>
    //       <img src={solar5} alt="Mars" className="sc5"></img>
    //       <img src={solar6} alt="Jupiter" className="sc6"></img>
    //       <img src={solar7} alt="Saturn" className="sc7"></img>
    //       <img src={solar8} alt="Uranus" className="sc8"></img>
    //       <img src={solar9} alt="Neptune" className="sc9"></img>
    //     </div>
    //     <div className="orbit"></div>
    //   </div>

    //   {/* Main Content */}
    //   <div className="main-content">
    //     {/* Sidebar */}
    //     <div className="sidebar">
    //       <div className="filter-section">
    //         <div className="dropdown">
    //           <button className="dropdown-1">All stateline</button>
    //           <button className="dropdown-2">Most viewed</button>
    //         </div>
    //       </div>
    //       <div className="observatories">
    //         {/* Keck Observatory */}
    //         <div className="keck-card">
    //           <img src={img1} alt="Keck Observatory" className="keck-image" />
    //           <div className="keck-info">
    //             <h1>Keck Observatory</h1>
    //             <p>
    //               Đặt tại núi Mauna Kea, thành lập năm 1993,là kính viễn <br />
    //               vọng quang học lớn nhất thế giới (Keck I và II),đóng góp{" "}
    //               <br />
    //               vào nghiên cứu ngoại hành tinh và sóng hấp dẫn.
    //             </p>
    //             <button className="explore-button1">EXPLORE</button>
    //           </div>
    //         </div>

    //         {/* Paranal Observatory */}
    //         <div className="paranal-card">
    //           <img
    //             src={img2}
    //             alt="Paranal Observatory"
    //             className="paranal-image"
    //           />
    //           <div className="paranal-info">
    //             <h1>Paranal Observatory</h1>
    //             <p>
    //               Nằm tại sa mạc Atacama, thuộc ESO, vận hành từ 1999, <br />
    //               sở hữu Kính Viễn Vọng Rất Lớn Large Telescope (VLT), <br />
    //               nổi bật trong nghiên cứu thiên hà và sự hình thành sao.
    //             </p>
    //             <button className="explore-button">EXPLORE</button>

    //           </div>
    //         </div>
    //         {/* <div className="arecibo-card">
    //           <img
    //             src={img3}
    //             alt="Arecibo Observatory"
    //             className="arecibo-image"
    //           />

    //         </div>
    //         <div className="arecibo-card">
    //           <img
    //             src={img3}
    //             alt="Arecibo Observatory"
    //             className="arecibo-image"
    //           />

    //         </div> */}
    //       </div>
    //     </div>

    //     {/* Main Image Section */}
    //     <div className="image-section">
    //       <img src={logo} alt="Main Observatory" className="main-image" />
    //     </div>
    //   </div>
    //   <div className="navbar">
    //     <div className="navbar-icon">
    //       <img src={ic1} alt="Home" className="icon1"></img>
    //       <img src={ic2} alt="Search" className="icon2"></img>
    //       <img src={ic3} alt="World" className="icon3"></img>
    //     </div>
    //   </div>
    // </div>
<div className="container">
<Background ></Background>

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
    <div className='orbit'></div>
</div>

<div className='content-container'>

    <div className="explore">
        <div className='dropdown'>
            <div className='button'>All stateline</div>
            <div className='button'>Most viewed</div>
        </div>
        <div className='keck'>
            <div className='keckcard'>
                <div className='tittle'>Keck Observatory</div>
                <div className='moreinfo'>
                    <span>Đặt tại núi Mauna Kea, thành lập năm 1993,là kính viễn </span>
                    <span className='lighttext'></span>
                    <span>. It is the densest planet in the Solar System. Of the four </span>
                    <span className='lighttext'>rocky planets</span>
                    <span>, it is the largest and most massive...</span>
                </div>
                <div>
                    <div className='explorebutton'>
                        <div className='wrapicon'>
                            <img src={ic6} alt="icon" />
                        </div>
                        <div className='textfill'>EXPLORE</div>
                        <img src={ic7} alt="vecto"></img>
                    </div>

                </div>
            </div>
            <img  className='content-img' src={img1} alt="Keck"/>
        </div>

        <div className='paranal'>
            <div className='paranalcard'>
                <div className='tittle'>Paranal Observatory</div>
                <div className='moreinfo'>
                    <span>The Sun orbits the </span>
                    <span className='lighttext'>Galactic Center</span>
                    <span>. at a distance of 24,000 - 28,000 light-years. From Earth, it is 1 astronomical unit or about 8 </span>
                    <span className='lighttext'>light-minutes</span>
<span> away. Its diameter is about 109 times that of Earth... </span>
                </div>
                <div>
                    <div className='explorebutton'>
                        <div className='wrapicon'>
                            <img src={ic6} alt="icon"/>
                        </div>
                        <div className='textfill'>EXPLORE</div>
                        <img src={ic7} alt="icon"></img>
                    </div>

                </div>
            </div>
            <img  className='content-img' src={img2} alt="Paranal" />
        </div>

        <div className='mars'>
            <div className='marscard'>
                <div className='tittle'>Mars</div>
                <div className='moreinfo'>
                    <span>The surface of Mars is orange-red because it is covered in </span>
                    <span className='lighttext'>iron(III) oxide dust</span>
                    <span>, giving it the nickname "the Red Planet". Mars is among the </span>
                    <span className='lighttext'>brightest</span>
                    <span> objects in Earth's sky, and a common subject for telescope viewing...  </span>
                </div>
                <div>
                    <div className='explorebutton'>
                        <div className='wrapicon'>
                            <img src={ic6} alt="icon" />
                        </div>
                        <div className='textfill'>EXPLORE</div>
                        <img src={ic7} alt="icon"></img>
                    </div>

                </div>
            </div>
            <img  className='content-img' src={img3} alt="Arecibo" />
        </div>
    </div>

    <div className="infor">
    <img src={logo} alt="dai quan sat"/>
    </div>

</div>
<div className="nav">
    loremisum
</div>
</div>
  );
};

export default App;
