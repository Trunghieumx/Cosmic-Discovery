import './Kitt.css'
import img from '../assets/image/Kiit Peak.png'
import ic1 from '../assets/image/iconearth.png'
import ic2 from '../assets/image/Vector.png'
function Kitt({ onExplore }) {
    return ( 
        <div>
                       <div className="kitt">
            <div className="kittcard">
              <div className="tittle">Kitt Peak Observatory</div>
              <div className="moreinfo">
                <span>
                Is an astronomical observatory located in Arizona, USA, with an altitude of about 
                </span>
                <span className="lighttext"> 2,096 meters. </span>
                <span>Established in 1958, it is one of</span>
                <span className="lighttext"> the largest </span>
                <span>and most important observatories in the world.</span>
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
            <img className="content-img" src={img} alt="Kitt" />
          </div>
        </div>
     );
}

export default Kitt;