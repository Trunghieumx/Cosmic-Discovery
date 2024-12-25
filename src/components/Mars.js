import './Mars.css'
function Mars({onExplore}) {
    return (

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
                    <div className='explorebutton'onClick={onExplore}>
                        <div className='wrapicon'>
                            <img src="./images/iconmars.png" />
                        </div>
                        <div className='textfill'>EXPLORE</div>
                        <img src='./images/Vector.png'></img>
                    </div>

                </div>
            </div>
            <img className='content-img' src="./images/Marscard.png" />
        </div>

    );
}

export default Mars;