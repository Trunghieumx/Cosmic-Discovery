import logo from "../assets/image/chòm sao Scorpio.jpg"
import ic1 from "../assets/image/iconearth.png"
import ic2 from "../assets/image/Vector.png"
import "./Scorpio.css"
function Scorpio({ onExplore }) {
    return ( 
        <>
        <div className="scorpio">
            <div className="scorpiocard">
              <div className="tittle">Scorpio</div>
              <div className="moreinfo">
                <span>
                Located near the ecliptic, clearest in the Southern Hemisphere in summer. The bright star
                </span>
                <span className="lighttext"> Antares </span>
                <span>
                 located in the center is often called the
                </span>
                <span className="lighttext">"Heart of Scorpio".</span>
                <span> Shaped like a scorpion with a curved tail.</span>
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
            <img className="content-img" src={logo} alt="Scorpio" />
          </div>

        </>
     );
}

export default Scorpio;