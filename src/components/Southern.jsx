import logo from "../assets/image/chòm sao Southern.png"
import ic1 from "../assets/image/iconearth.png"
import ic2 from "../assets/image/Vector.png"
import "./Southern.css"
function Southern({ onExplore }) {
    return ( 
        <>
        <div className="southern">
            <div className="southerncard">
              <div className="tittle">Southern Cross</div>
              <div className="moreinfo">
                <span>
                Clearly observed in the Southern Hemisphere.
                </span>
                <span className="lighttext"> Consists of four main stars </span>
                <span>
                forming a cross shape. It is a cultural and navigational icon in the Southern Hemisphere
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
            <img className="content-img" src={logo} alt="Southern Cross" />
          </div>
        
        </>
     );
}

export default Southern;