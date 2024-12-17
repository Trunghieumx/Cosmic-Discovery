import './Keck.css'
function Keck() {
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
                <div className="explorebutton">
                  <div className="wrapicon">
                    <img src="../assets/image/iconearth.png" alt="icon" />
                  </div>
                  <div className="textfill">EXPLORE</div>
                  <img src="../assets/image/Vector.png" alt="vecto"></img>
                </div>
              </div>
            </div>
            <img className="content-img" src="../assets/image/KeckObservatory.jpg" alt="Keck" />
          </div>
        </div>
     );
}

export default Keck;