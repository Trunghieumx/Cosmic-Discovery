import './Observatory.css';
import './Fade.css';
import { useState } from "react";
import Navbar from "./Navbar";
import SolarPanel from "./SolarPanel";
import Lick from './Lick';
import Arecibo from './Arecibo';
import Keck from './Keck';
import Paranal from './Paranal';
import LickCard from './LickCard';
import AreciboCard from './AreciboCard';
import KeckCard from './KeckCard';
import ParanalCard from './ParanalCard';
import SolarSystemView from './SolarSystemView';
import Orion from './Orion';
import Ursa from './Ursa';
import Scorpio from './Scorpio';
import Southern from './Southern';
import Halley from './Halley';
import Hale from './Hale';
import OrionCard from './OrionCard';
import UrsaCard from './UrsaCard';
import ScorpioCard from './ScorpioCard';
import SouthernCard from './SouthernCard';
import HalleyCard from './HalleyCard';
import HaleCard from './HaleCard';
import ObserCard from './ObserCard';
import Constellationcard from './Constellationcard'
import Palomar from './Palomar';
import PalomarCard from './PalomarCard';
import Kitt from './Kitt';
import KittCard from './KittCard';

function Observatory() {
    const [activeContent, setActiveContent] = useState('ObserCard');
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
            if (type === 'observatories') {
                setShowObservatories(true);
                setActiveContent('ObserCard'); 
            } else if (type === 'constellations') {
                setShowObservatories(false);
                setActiveContent('Constellationcard'); 
            }
            setFadeClass('fade-in'); 
        }, 300);
    };
    return ( 
        <div className="container">
            <SolarPanel onExplore={() => handleChangeContent('SolarSystem')} />
            <div className="content-container">
                <div className="explore">
                    <div className="button-container">
                        <div className="button" onClick={() => toggleLists('observatories')}>Observatory</div>
                        <div className="button" onClick={() => toggleLists('constellations')}>Constellations</div>
                    </div>
                    {showObservatories ? (
                        <div className="obser-list">
                            <Lick onExplore={() => handleChangeContent('LickCard')} />
                            <Arecibo onExplore={() => handleChangeContent('AreciboCard')} />
                            <Keck onExplore={() => handleChangeContent('KeckCard')} />
                            <Paranal onExplore={() => handleChangeContent('ParanalCard')} />
                            <Palomar onExplore={() => handleChangeContent('PalomarCard')} />
                            <Kitt onExplore={() => handleChangeContent('KittCard')} />
                        </div>
                    ) : (
                        <div className="obser-list">
                            <Orion onExplore={() => handleChangeContent('OrionCard')} />
                            <Ursa onExplore={() => handleChangeContent('UrsaCard')} />
                            <Scorpio onExplore={() => handleChangeContent('ScorpioCard')} />
                            <Southern onExplore={() => handleChangeContent('SouthernCard')} />
                            <Halley onExplore={() => handleChangeContent('HalleyCard')} />
                            <Hale onExplore={() => handleChangeContent('HaleCard')} />
                        </div>
                    )}
                </div>
                <div className={`infor ${fadeClass}`}>
                {activeContent === 'ObserCard' && <ObserCard />}
                    {activeContent === 'LickCard' && <LickCard />}
                    {activeContent === 'AreciboCard' && <AreciboCard />}
                    {activeContent === 'KeckCard' && <KeckCard />}
                    {activeContent === 'ParanalCard' && <ParanalCard />}
                    {activeContent === 'PalomarCard' && <PalomarCard />}
                    {activeContent === 'KittCard' && <KittCard />}
                    {activeContent === 'SolarSystem' && <SolarSystemView />}
                    {/* constellations */}
                    {activeContent === 'Constellationcard' && <Constellationcard/>} {/* Thêm điều kiện này */}
                    {activeContent === 'OrionCard' && <OrionCard />}
                    {activeContent === 'UrsaCard' && <UrsaCard />}
                    {activeContent === 'ScorpioCard' && <ScorpioCard />}
                    {activeContent === 'SouthernCard' && <SouthernCard />}
                    {activeContent === 'HalleyCard' && <HalleyCard />}
                    {activeContent === 'HaleCard' && <HaleCard />}
                </div>
            </div>
            <Navbar onSelectIcon={handleSelectIcon} />
        </div>
    );
}

export default Observatory;
