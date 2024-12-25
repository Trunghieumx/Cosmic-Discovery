import logo from "../assets/image/Sao-chổi-Halley-6.jpg"
import ic1 from "../assets/image/iconearth.png"
import ic2 from "../assets/image/Vector.png"
import "./Halley.css"
function Halley({ onExplore }) {
    return ( 
        <>
        <div className="halley">
            <div className="halleycard">
              <div className="tittle">Halley's Comet</div>
              <div className="moreinfo">
                <span>
                The tail of the dust is long and bright, the tip of the nucleus contains ice and dust.
                </span>
                <span className="lighttext">The ion tail is dim, </span>
                <span>
                located opposite to the Sun. This comet has been recorded since ancient times and has been studied many times.
                </span>
              </div>
              <div>
                <div className="explorebutton" onClick={onExplore}>
                  <div className="wrapicon">
                    <img src={ic1} alt="icon" />
                  </div>
                  <div className="textfill">EXPLORE</div>
                  <img src={ic2} alt="icon"></img>
                </div>
              </div>
            </div>
            <img className="content-img" src={logo} alt="Halley's Comet" />
          </div>
        </>
     );
}

export default Halley;