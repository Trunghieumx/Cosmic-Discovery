import './Palomar.css'
import img from '../assets/image/Palomar.png'
import ic1 from '../assets/image/iconearth.png'
import ic2 from '../assets/image/Vector.png'
function Palomar({ onExplore }) {
    return ( 
        <div>
                       <div className="palomar">
            <div className="palomarcard">
              <div className="tittle">Palomar Observatory</div>
              <div className="moreinfo">
                <span>
                Location: Palomar Mountain, San Diego County, California, USA.
                </span>
                <span className="lighttext"> Altitude: 1,713 meters (5,620 feet) </span>
                <span>above sea level. Owner:</span>
                <span className="lighttext"> California Institute of Technology (Caltech). </span>
                <span> Established: Operating since 1949.</span>
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
            <img className="content-img" src={img} alt="Palomar" />
          </div>
        </div>
     );
}

export default Palomar;