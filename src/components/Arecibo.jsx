import logo from "../assets/image/Arecibo.png"
import ic1 from "../assets/image/iconearth.png"
import ic2 from "../assets/image/Vector.png"
import "./Arecibo.css"
function Arecibo({ onExplore }) {
    return ( 
        <>
         <div className="arecibo">
            <div className="arecibocard">
              <div className="tittle">Arecibo Observatory</div>
              <div className="moreinfo">
                <span>
                  Built in 1963 and located in Arecibo, Puerto Rico, in a
                  natural valley between hills, it features{" "}
                </span>
                <span className="lighttext">a 305-meter </span>
                <span>
                  radio telescope, used to study and observe deep space objects
                  such as
                </span>
                <span className="lighttext">
                  pulsars, quasars and asteroids.
                </span>
                <span> Closed in 2020.</span>
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
            <img className="content-img" src={logo} alt="Arecibo" />
          </div>

        </>
     );
}

export default Arecibo;