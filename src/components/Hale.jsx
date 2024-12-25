import logo from "../assets/image/Sao chổi Hale-Bopp.jpg"
import ic1 from "../assets/image/iconearth.png"
import ic2 from "../assets/image/Vector.png"
import "./Hale.css"
function Hale({ onExplore }) {
    return ( 
        <>
        <div className="hale">
            <div className="halecard">
              <div className="tittle">Comet Hale-Bopp</div>
              <div className="moreinfo">
                <span>
                Comet Hale-Bopp stands out with its very bright and long tail, which can be observed from all over the world without a telescope. This comet does not come as close to
                </span>
                <span className="lighttext"> the Sun as Halley </span>
                <span>
                and thanks to its long orbit it appears clearer and longer.
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
            <img className="content-img" src={logo} alt="Comet Hale-Bopp" />
          </div>
        </>
     );
}

export default Hale;