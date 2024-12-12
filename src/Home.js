import React from 'react'
import './Home.css';

function Home() {

    return (
        <div className="container">

            <div className="solar-panel">
                <div className="solar-content">
                    <img src='./images/Sun.png'></img>
                    <img src='./images/Mercury.png'></img>
                    <img src='./images/Venus.png'></img>
                    <img src='./images/Earth.png'></img>
                    <img src='./images/Mars.png'></img>
                    <img src='./images/Jupiter.png'></img>
                    <img src='./images/Saturn.png'></img>
                    <img src='./images/Uranus.png'></img>
                    <img src='./images/Neptune.png'></img>
                </div>
                <div className='orbit'></div>
            </div>

            <div className='content-container'>

                <div className="explore">
                    <div className='dropdown'>
                        <div className='button'>All stateline</div>
                        <div className='button'>Most viewed</div>
                    </div>
                    <div className='earth'>
                        <div className='earthcard'>
                            <div className='tittle'>Earth</div>
                            <div className='moreinfo'>
                                <span>Earth is rounded into an ellipsoid with a circumference of about </span>
                                <span className='lighttext'>40,000 km</span>
                                <span>. It is the densest planet in the Solar System. Of the four </span>
                                <span className='lighttext'>rocky planets</span>
                                <span>, it is the largest and most massive...</span>
                            </div>
                            <div>
                                <div className='explorebutton'>
                                    <div className='wrapicon'>
                                        <img src="./images/iconearth.png" />
                                    </div>
                                    <div className='textfill'>EXPLORE</div>
                                    <img src='./images/Vector.png'></img>
                                </div>

                            </div>
                        </div>
                        <img  className='content-img' src="./images/Earthcard.png" />
                    </div>

                    <div className='sun'>
                        <div className='suncard'>
                            <div className='tittle'>Sun</div>
                            <div className='moreinfo'>
                                <span>The Sun orbits the </span>
                                <span className='lighttext'>Galactic Center</span>
                                <span>. at a distance of 24,000 - 28,000 light-years. From Earth, it is 1 astronomical unit or about 8 </span>
                                <span className='lighttext'>light-minutes</span>
                                <span> away. Its diameter is about 109 times that of Earth... </span>
                            </div>
                            <div>
                                <div className='explorebutton'>
                                    <div className='wrapicon'>
                                        <img src="./images/iconsun.png" />
                                    </div>
                                    <div className='textfill'>EXPLORE</div>
                                    <img src='./images/Vector.png'></img>
                                </div>

                            </div>
                        </div>
                        <img  className='content-img' src="./images/Suncard.png" />
                    </div>

                    <div className='mars'>
                        <div className='marscard'>
                            <div className='tittle'>Mars</div>
                            <div className='moreinfo'>
                                <span>The surface of Mars is orange-red because it is covered in </span>
                                <span className='lighttext'>iron(III) oxide dust</span>
                                <span>, giving it the nickname "the Red Planet". Mars is among the </span>
                                <span className='lighttext'>brightest</span>
                                <span> objects in Earth's sky, and a common subject for telescope viewing...  </span>
                            </div>
                            <div>
                                <div className='explorebutton'>
                                    <div className='wrapicon'>
                                        <img src="./images/iconmars.png" />
                                    </div>
                                    <div className='textfill'>EXPLORE</div>
                                    <img src='./images/Vector.png'></img>
                                </div>

                            </div>
                        </div>
                        <img  className='content-img' src="./images/Marscard.png" />
                    </div>
                </div>

                <div className="infor">

                </div>

            </div>
            <div className="nav">
                loremisum
            </div>
        </div>
    );
}

export default Home;