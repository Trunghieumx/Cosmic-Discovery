import './SolarPanel.css'

function SolarPanel({ onExplore }) {
    return (
        <div className="solar-panel" onClick={onExplore}>
            <div className="solar-content">
                <div className="planet">
                    <img src='/images/Sun.png' alt="Sun" />
                    <span className="planet-name">Sun</span>
                </div>
                <div className="planet">
                    <img src='/images/Mercury.png' alt="Mercury" />
                    <span className="planet-name">Mercury</span>
                </div>
                <div className="planet">
                    <img src='/images/Venus.png' alt="Venus" />
                    <span className="planet-name">Venus</span>
                </div>
                <div className="planet">
                    <img src='/images/Earth.png' alt="Earth" />
                    <span className="planet-name">Earth</span>
                </div>
                <div className="planet">
                    <img src='/images/Mars.png' alt="Mars" />
                    <span className="planet-name">Mars</span>
                </div>
                <div className="planet">
                    <img src='/images/Jupiter.png' alt="Jupiter" />
                    <span className="planet-name">Jupiter</span>
                </div>
                <div className="planet">
                    <img src='/images/Saturn.png' alt="Saturn" />
                    <span className="planet-name">Saturn</span>
                </div>
                <div className="planet">
                    <img src='/images/Uranus.png' alt="Uranus" />
                    <span className="planet-name">Uranus</span>
                </div>
                <div className="planet">
                    <img src='/images/Neptune.png' alt="Neptune" />
                    <span className="planet-name">Neptune</span>
                </div>
            </div>
            <div className="orbit"></div>
        </div>
    );
}

export default SolarPanel;
