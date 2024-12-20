// import React from "react";
// import "./App.css"; // Đừng quên thêm CSS vào file này
// import logo from "./assets/image/chom sao bg.png";
// import img1 from "./assets/image/Orion.png";
// import img2 from "./assets/image/chòm sao Ursa.jpg";
// import img3 from "./assets/image/chòm sao Scorpio.jpg";
// import img4 from "./assets/image/chòm sao Southern.png";
// import img5 from "./assets/image/Sao-chổi-Halley-6.jpg";
// import img6 from "./assets/image/Sao chổi Hale-Bopp.jpg"
// import solar1 from "./assets/image/Sun.png";
// import solar2 from "./assets/image/Mercury.png";
// import solar3 from "./assets/image/Venus.png";
// import solar4 from "./assets/image/Earth.png";
// import solar5 from "./assets/image/Mars.png";
// import solar6 from "./assets/image/Jupiter.png";
// import solar7 from "./assets/image/Saturn.png";
// import solar8 from "./assets/image/Uranus.png";
// import solar9 from "./assets/image/Neptune.png";
// import ic6 from "./assets/image/iconearth.png";
// import ic7 from "./assets/image/Vector.png";
// import Background from "./Component/Background"

// function ConstellationsComets() {
//   return (
//     <div className="container">
     
//       <Background></Background>

//       <div className="solar-panel">
//         <div className="solar-content">
//           <img src={solar1} alt="Sun"></img>
//           <img src={solar2} alt="Mercury"></img>
//           <img src={solar3} alt="Venus"></img>
//           <img src={solar4} alt="Earth"></img>
//           <img src={solar5} alt="Mars"></img>
//           <img src={solar6} alt="Jupiter"></img>
//           <img src={solar7} alt="Saturn"></img>
//           <img src={solar8} alt="Uranus"></img>
//           <img src={solar9} alt="Neptune"></img>
//         </div>
//         <div className="orbit"></div>
//       </div>

//       <div className="content-container">
//         <div className="explore">
//           <div className="dropdown">
//             <div className="button">All stateline</div>
//             <div className="button">Most viewed</div>
//           </div>
//           <div className="orion">
//             <div className="orioncard">
//               <div className="tittle">Orion</div>
//               <div className="moreinfo">
//                 <span>
//                 Orion lies on the celestial equator, visible from most parts of the world. It is most visible in winter in the Northern Hemisphere 
//                 </span>
//                 <span className="lighttext"> (November to February). </span>

//               </div>
//               <div>
//                 <div className="explorebutton">
//                   <div className="wrapicon">
//                     <img src={ic6} alt="icon" />
//                   </div>
//                   <div className="textfill">EXPLORE</div>
//                   <img src={ic7} alt="vecto"></img>
//                 </div>
//               </div>
//             </div>
//             <img className="content-img" src={img1} alt="Orion" />
//           </div>

//           <div className="ursa">
//             <div className="ursacard">
//               <div className="tittle">Ursa Major</div>
//               <div className="moreinfo">
//                 <span>
//                 Ursa Major is a prominent constellation in the Northern Hemisphere, easily recognizable thanks to the
//                 </span>
//                 <span className="lighttext"> Big Dipper </span>
//                 <span>
//                 star group, consisting of 7 bright stars forming a bucket shape. The two stars Dubhe and Merak in this group help determine the North Star.
//                 </span>
//               </div>
//               <div>
//                 <div className="explorebutton">
//                   <div className="wrapicon">
//                     <img src={ic6} alt="icon" />
//                   </div>
//                   <div className="textfill">EXPLORE</div>
//                   <img src={ic7} alt="icon"></img>
//                 </div>
//               </div>
//             </div>
//             <img className="content-img" src={img2} alt="Ursa Major" />
//           </div>

//           <div className="scorpio">
//             <div className="scorpiocard">
//               <div className="tittle">Scorpio</div>
//               <div className="moreinfo">
//                 <span>
//                 Located near the ecliptic, clearest in the Southern Hemisphere in summer. The bright star
//                 </span>
//                 <span className="lighttext"> Antares </span>
//                 <span>
//                  located in the center is often called the
//                 </span>
//                 <span className="lighttext">"Heart of Scorpio".</span>
//                 <span> Shaped like a scorpion with a curved tail.</span>
//               </div>
//               <div>
//                 <div className="explorebutton">
//                   <div className="wrapicon">
//                     <img src={ic6} alt="icon" />
//                   </div>
//                   <div className="textfill">EXPLORE</div>
//                   <img src={ic7} alt="icon"></img>
//                 </div>
//               </div>
//             </div>
//             <img className="content-img" src={img3} alt="Scorpio" />
//           </div>

//           <div className="southern">
//             <div className="southerncard">
//               <div className="tittle">Southern Cross</div>
//               <div className="moreinfo">
//                 <span>
//                 Clearly observed in the Southern Hemisphere.
//                 </span>
//                 <span className="lighttext"> Consists of four main stars </span>
//                 <span>
//                 forming a cross shape. It is a cultural and navigational icon in the Southern Hemisphere
//                 </span>
//               </div>
//               <div>
//                 <div className="explorebutton">
//                   <div className="wrapicon">
//                     <img src={ic6} alt="icon" />
//                   </div>
//                   <div className="textfill">EXPLORE</div>
//                   <img src={ic7} alt="icon"></img>
//                 </div>
//               </div>
//             </div>
//             <img className="content-img" src={img4} alt="Southern Cross" />
//           </div>

//           <div className="halley">
//             <div className="halleycard">
//               <div className="tittle">Halley's Comet</div>
//               <div className="moreinfo">
//                 <span>
//                 The tail of the dust is long and bright, the tip of the nucleus contains ice and dust.
//                 </span>
//                 <span className="lighttext">The ion tail is dim, </span>
//                 <span>
//                 located opposite to the Sun. This comet has been recorded since ancient times and has been studied many times.
//                 </span>
//               </div>
//               <div>
//                 <div className="explorebutton">
//                   <div className="wrapicon">
//                     <img src={ic6} alt="icon" />
//                   </div>
//                   <div className="textfill">EXPLORE</div>
//                   <img src={ic7} alt="icon"></img>
//                 </div>
//               </div>
//             </div>
//             <img className="content-img" src={img5} alt="Halley's Comet" />
//           </div>

//           <div className="hale">
//             <div className="halecard">
//               <div className="tittle">Comet Hale-Bopp</div>
//               <div className="moreinfo">
//                 <span>
//                 Comet Hale-Bopp stands out with its very bright and long tail, which can be observed from all over the world without a telescope. This comet does not come as close to
//                 </span>
//                 <span className="lighttext"> the Sun as Halley </span>
//                 <span>
//                 and thanks to its long orbit it appears clearer and longer.
//                 </span>
//               </div>
//               <div>
//                 <div className="explorebutton">
//                   <div className="wrapicon">
//                     <img src={ic6} alt="icon" />
//                   </div>
//                   <div className="textfill">EXPLORE</div>
//                   <img src={ic7} alt="icon"></img>
//                 </div>
//               </div>
//             </div>
//             <img className="content-img" src={img6} alt="Comet Hale-Bopp" />
//           </div>
//         </div>

//         <div className="infor">
//           <img src={logo} alt="Chom sao" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ConstellationsComets;
