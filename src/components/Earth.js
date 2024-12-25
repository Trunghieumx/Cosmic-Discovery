import './Earth.css'
function Earth({ onExplore }) {
    return (
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
                    <div className='explorebutton' onClick={onExplore}>
                        <div className='wrapicon'>
                            <img src="./images/iconearth.png" />
                        </div>
                        <div className='textfill'>EXPLORE</div>
                        <img src='./images/Vector.png'></img>
                    </div>

                </div>
            </div>
            <img className='content-img' src="./images/Earthcard.png" />
        </div>

    );
}

export default Earth;