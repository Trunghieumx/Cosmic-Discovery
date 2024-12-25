import logo from "../assets/image/Orion.png"
import ic1 from "../assets/image/iconearth.png"
import ic2 from "../assets/image/Vector.png"
import "./Orion.css"
function Orion({ onExplore }) {
    return ( 
        <>
        <div className="orion">
            <div className="orioncard">
              <div className="tittle">Orion</div>
              <div className="moreinfo">
                <span>
                Orion lies on the celestial equator, visible from most parts of the world. It is most visible in winter in the Northern Hemisphere 
                </span>
                <span className="lighttext"> (November to February). </span>

              </div>
              <div>
                <div className="explorebutton" onClick={onExplore}>
                  <div className="wrapicon">
                    <img src={ic1} alt="icon" />
                  </div>
                  <div className="textfill">EXPLORE</div>
                  <img src={ic2} alt="vecto"></img>
                </div>
              </div>
            </div>
            <img className="content-img" src={logo} alt="Orion" />
          </div>
        
        </>
     );
}

export default Orion;