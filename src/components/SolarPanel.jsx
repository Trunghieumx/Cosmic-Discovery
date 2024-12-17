import './SolarPanel.css'
function SolarPanel() {
    return (
        <div className="solar-panel">
            <div className="solar-content">
                <img src='/images/Sun.png'></img>
                <img src='/images/Mercury.png'></img>
                <img src='/images/Venus.png'></img>
                <img src='/images/Earth.png'></img>
                <img src='/images/Mars.png'></img>
                <img src='/images/Jupiter.png'></img>
                <img src='/images/Saturn.png'></img>
                <img src='/images/Uranus.png'></img>
                <img src='/images/Neptune.png'></img>
            </div>
            <div className='orbit'></div>
        </div>
    );
}

export default SolarPanel;