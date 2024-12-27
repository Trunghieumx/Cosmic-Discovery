import './About.css';
import './Fade.css';
import { useState } from "react";
import Navbar from "./Navbar";
import SolarPanel from "./SolarPanel";
import SolarSystemView from './SolarSystemView';
import AboutCard from './AboutCard';
import Contact from './Contact'


function Observatory() {
    const [activeContent, setActiveContent] = useState('AboutCard');
    const [fadeClass, setFadeClass] = useState('');
    const [showObservatories, setShowObservatories] = useState(true); 

    const handleChangeContent = (content) => {
        setFadeClass('fade-out');
        setTimeout(() => {
            setActiveContent(content); 
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

    const toggleLists = (type) => {
        setFadeClass('fade-out'); 
        setTimeout(() => {
            if (type === 'abouts') {
                setShowObservatories(true);
                setActiveContent('AboutCard'); 
            } else if (type === 'contacts') {
                setShowObservatories(false);
                setActiveContent('Contact'); 
            }
            setFadeClass('fade-in'); 
        }, 300);
    };
    return ( 
        <div className="container">
           <div className='solar'> <SolarPanel onExplore={() => handleChangeContent('SolarSystem')} /></div>
            <div className="content-container">
            
                <div className={`infor ${fadeClass}`}>
                <div className="button-container">
                        <div className="button" onClick={() => toggleLists('abouts')}>About us</div>
                        <div className="button" onClick={() => toggleLists('contacts')}>Contact us</div>
                    </div>
                    {activeContent === 'AboutCard' && <AboutCard />}
                    {activeContent === 'SolarSystem' && <SolarSystemView />}
                    {activeContent === 'Contact' && <Contact/>} 

                </div>
            </div>
            <Navbar onSelectIcon={handleSelectIcon} />
        </div>
    );
}

export default Observatory;
