import logo from "../assets/image/lick observatory.png"
import ic1 from "../assets/image/iconearth.png"
import ic2 from "../assets/image/Vector.png"
import './Lick.css'
function Lick({ onExplore }) {
  return (
    <div className="lick">
      <div className="lickcard">
        <div className="tittle">Lick Observatory</div>
        <div className="moreinfo">
          <span>
            Located on the top of Mount Hamilton at an altitude of about
            1,283 meters, in the Diablo range, near San Jose city,
            California, USA.
          </span>
          <span className="lighttext">Established in 1888, </span>
          <span>
            it is one of the oldest observatories still in operation, with
            great historical significance.
          </span>
        </div>
        <div className="explorebutton" onClick={onExplore}>
          <div className="wrapicon">
            <img src={ic1} alt="icon" />
          </div>
          <div className="textfill">EXPLORE</div>
          <img src={ic2} alt="icon"></img>
        </div>
      </div>
      <img className="content-img" src={logo} alt="Lick" />
    </div>
  );
}

export default Lick;