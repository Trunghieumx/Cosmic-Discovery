import './Neptune.css'
function Neptune({onExplore}) {
    return (
        <div className='neptune'>
            <div className='neptunecard'>
                <div className='tittle'>Neptune</div>
                <div className='moreinfo'>
                    <span>Neptune is </span>
                    <span className='lighttext'>the largest</span>
                    <span> planet in the Solar System. It is a gas giant primarily composed of hydrogen and helium, with no solid surface. Neptune is famous for its massive size, iconic </span>
                    <span className='lighttext'>Great Red Spot</span>
                    <span>, and its many moons, some of which are of </span>
                    <span className='lighttext'>great scientific interest</span>
                    <span>.</span>
                </div>
                <div>
                    <div className='explorebutton' onClick={onExplore}>
                        <div className='wrapicon'>
                            <img src="./images/iconneptune.png" />
                        </div>
                        <div className='textfill'>EXPLORE</div>
                        <img src='./images/Vector.png'></img>
                    </div>

                </div>
            </div>
            <img className='content-img' src="./images/neptunecard.png" />
        </div>
    );
}

export default Neptune;