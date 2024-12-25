import './Venus.css'
function Venus({onExplore}) {
    return (
        <div className='venus'>
            <div className='venuscard'>
                <div className='tittle'>Venus</div>
                <div className='moreinfo'>
                    <span>venus is the second planet from the Sun. Known as </span>
                    <span className='lighttext'>the hottest</span>
                    <span> planet in the Solar System, Venus is shrouded in thick clouds of sulfuric acid and has a runaway </span>
                    <span className='lighttext'>greenhouse effect</span>
                    <span> , making it an </span>
                    <span className='lighttext'>inhospitable world</span>
                    <span>.</span>
                </div>
                <div>
                    <div className='explorebutton' onClick={onExplore}>
                        <div className='wrapicon'>
                            <img src="./images/iconvenus.png" />
                        </div>
                        <div className='textfill'>EXPLORE</div>
                        <img src='./images/Vector.png'></img>
                    </div>

                </div>
            </div>
            <img className='content-img' src="./images/venuscard.png" />
        </div>
    );
}

export default Venus;