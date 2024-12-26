import './Paranal.css'
import img from '../assets/image/Paranal.jpg'
import ic1 from '../assets/image/iconearth.png'
import ic2 from '../assets/image/Vector.png'
function Paranal({ onExplore }) {
    return ( 
        <>
        <div className="paranal">
            <div className="paranalcard">
              <div className="tittle">Paranal Observatory</div>
              <div className="moreinfo">
                <span>
                  Located in the Atacama Desert, ESO, in operation since 1999,
                </span>
                <span className="lighttext">
                  owns the Very Large Telescope (VLT),
                </span>
                <span>
                  which excels in studying galaxies and star formation.
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
            <img className="content-img" src={img} alt="Paranal" />
          </div>

        </>
     );
}

export default Paranal;