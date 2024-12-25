import './Jupiter.css'
function Jupiter({onExplore}) {
    return (
        <div className='jupiter'>
            <div className='jupitercard'>
                <div className='tittle'>Jupiter</div>
                <div className='moreinfo'>
                    <span>Jupiter is </span>
                    <span className='lighttext'>the largest</span>
                    <span> planet in the Solar System. It is a gas giant primarily composed of hydrogen and helium, with no solid surface. Jupiter is famous for its massive size, iconic </span>
                    <span className='lighttext'>Great Red Spot</span>
                    <span>, and its many moons, some of which are of </span>
                    <span className='lighttext'>great scientific interest</span>
                    <span>.</span>
                </div>
                <div>
                    <div className='explorebutton' onClick={onExplore}>
                        <div className='wrapicon'>
                            <img src="./images/iconjupiter.png" />
                        </div>
                        <div className='textfill'>EXPLORE</div>
                        <img src='./images/Vector.png'></img>
                    </div>

                </div>
            </div>
            <img className='content-img' src="./images/jupitercard.png" />
        </div>
    );
}

export default Jupiter;