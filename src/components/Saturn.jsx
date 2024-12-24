import './Saturn.css'
function Saturn({onExplore}) {
    return (

        <div className='saturn'>
            <div className='saturncard'>
                <div className='tittle'>Saturn</div>
                <div className='moreinfo'>
                    <span>The planet has a bright and extensive </span>
                    <span className='lighttext'>system of rings</span>
                    <span>, composed mainly of ice particles, with a smaller amount of rocky debris and dust. At least </span>
                    <span className='lighttext'>146 moons</span>
                    <span> orbit the planet...  </span>
                </div>
                <div>
                    <div className='explorebutton' onClick={onExplore}>
                        <div className='wrapicon'>
                            <img src="./images/iconsaturn.png" />
                        </div>
                        <div className='textfill'>EXPLORE</div>
                        <img src='./images/Vector.png'></img>
                    </div>

                </div>
            </div>
            <img className='content-img' src="./images/Saturncard.png" />
        </div>

    );
}

export default Saturn;