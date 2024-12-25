import './Sun.css'
function Sun({onExplore}) {
    return (

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
                    <div className='explorebutton' onClick={onExplore}>
                        <div className='wrapicon'>
                            <img src="./images/iconsun.png" />
                        </div>
                        <div className='textfill'>EXPLORE</div>
                        <img src='./images/Vector.png'></img>
                    </div>
                </div>
            </div>
            <img className='content-img' src="./images/Suncard.png" />
        </div>

    );
}

export default Sun;