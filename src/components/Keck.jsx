import './Keck.css'
import img from '../assets/image/KeckObservatory.jpg'
import ic1 from '../assets/image/iconearth.png'
import ic2 from '../assets/image/Vector.png'
function Keck({ onExplore }) {
    return ( 
        <div>
                       <div className="keck">
            <div className="keckcard">
              <div className="tittle">Keck Observatory</div>
              <div className="moreinfo">
                <span>
                  Located on Mauna Kea mountain, founded in 1993, it owns two of
                  the world's
                </span>
                <span className="lighttext"> largest </span>
                <span>optical telescopes (Keck I and II), contribute to</span>
                <span className="lighttext"> exoplanet </span>
                <span> and gravitational wave research.</span>
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
            <img className="content-img" src={img} alt="Keck" />
          </div>
        </div>
     );
}

export default Keck;