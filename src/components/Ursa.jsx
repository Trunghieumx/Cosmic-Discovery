import logo from "../assets/image/chòm sao Ursa.jpg"
import ic1 from "../assets/image/iconearth.png"
import ic2 from "../assets/image/Vector.png"
import "./Ursa.css"
function Ursa({ onExplore }) {
    return ( 
        <>
        <div className="ursa">
            <div className="ursacard">
              <div className="tittle">Ursa Major</div>
              <div className="moreinfo">
                <span>
                Ursa Major is a prominent constellation in the Northern Hemisphere, easily recognizable thanks to the
                </span>
                <span className="lighttext"> Big Dipper </span>
                <span>
                star group, consisting of 7 bright stars forming a bucket shape. The two stars Dubhe and Merak in this group help determine the North Star.
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
            <img className="content-img" src={logo} alt="Ursa Major" />
          </div>
        </>
     );
}

export default Ursa;