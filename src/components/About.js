import './About.css';
import './Fade.css';
import { useState } from "react";
import Navbar from "./Navbar";
import SolarPanel from "./SolarPanel";
import SolarSystemView from './SolarSystemView';
import AboutCard from './AboutCard';

function About() {
    const [fadeClass, setFadeClass] = useState('fade-in');
    const [activeContent, setActiveContent] = useState('AboutCard');
    const [showSolarSystem, setShowSolarSystem] = useState(false);

    const handleChangeContent = () => {
        setFadeClass('fade-out');
        setTimeout(() => {
            setShowSolarSystem(!showSolarSystem);
            setActiveContent(showSolarSystem ? 'AboutCard' : 'SolarSystem');
            setFadeClass('fade-in');
        }, 300);
    };

    const handleSelectIcon = (iconName) => {
        if (iconName === 'world') {
            setActiveContent('EarthCard');
        } else {
            setActiveContent(iconName + 'Card'); 
        }
    };

    return ( 
        <div className="container">
            <div className='solar'>
                <SolarPanel onExplore={handleChangeContent} />
            </div>
            <div className="content-container">
                <div className={`infor ${fadeClass}`}>
                    {activeContent === 'AboutCard' && <AboutCard />}
                    {activeContent === 'SolarSystem' && <SolarSystemView />}
                </div>
            </div>
            <Navbar onSelectIcon={handleSelectIcon} />
        </div>
    );
}

export default About;