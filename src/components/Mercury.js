import './Mercury.css'
function Mercury({onExplore}) {
    return (
        <div className='mercury'>
            <div className='mercurycard'>
                <div className='tittle'>Mercury</div>
                <div className='moreinfo'>
                    <span>Mercury is the </span>
                    <span className='lighttext'>smallest planet</span>
                    <span> in the Solar System and </span>
                    <span className='lighttext'>the closest</span>
                    <span> to the Sun. Despite its proximity to the Sun, it is not the hottest planet (Venus holds that title).</span>
                    <span> Mercury is a rocky planet with a surface marked by craters, ridges, and plains, resembling Earth's Moon.</span>
                </div>
                <div>
                    <div className='explorebutton' onClick={onExplore}>
                        <div className='wrapicon'>
                            <img src="./images/iconmercury.png" />
                        </div>
                        <div className='textfill'>EXPLORE</div>
                        <img src='./images/Vector.png'></img>
                    </div>

                </div>
            </div>
            <img className='content-img' src="./images/Mercurycard.png" />
        </div>
    );
}

export default Mercury;