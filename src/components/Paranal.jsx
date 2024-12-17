import './Paranal.css'
function Paranal() {
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
                <div className="explorebutton">
                  <div className="wrapicon">
                    <img src="../assets/image/iconearth.png" alt="icon" />
                  </div>
                  <div className="textfill">EXPLORE</div>
                  <img src="../assets/image/Vector.png" alt="icon"></img>
                </div>
              </div>
            </div>
            <img className="content-img" src="../assets/image/Paranal.jpg" alt="Paranal" />
          </div>

        </>
     );
}

export default Paranal;