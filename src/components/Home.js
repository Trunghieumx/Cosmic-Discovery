import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';
import './Fade.css';
import Saturn from './Saturn';
import Earth from './Earth';
import Sun from './Sun';
import Mars from './Mars';
import SolarPanel from './SolarPanel';
import BigBang from './BigBang';
import Evolution from './Evolution';
import EarthCard from './EarthCard';
import SunCard from './SunCard';
import MarsCard from './MarsCard';
import SolarSystemView from './SolarSystemView';
import SaturnCard from './SaturnCard';
import Mercury from './Mercury';
import MercuryCard from './MercuryCard';
import Venus from './Venus';
import VenusCard from './VenusCard';
import Jupiter from './Jupiter';
import JupiterCard from './JupiterCard';
import Uranus from './Uranus';
import UranusCard from './UranusCard';
import Neptune from './Neptune';
import NeptuneCard from './NeptuneCard';
import Navbar from './Navbar';
import BookSearch from '../BookSearch';

function Home() {
  const location = useLocation();
  useEffect(() => {
    const state = location.state;
    if (state?.card) {
      setActiveContent(state.card);
    }
  }, [location]);
  const [activeContent, setActiveContent] = useState('BigBang');
  const [fadeClass, setFadeClass] = useState('');
  const [isContentContainerHidden, setContentContainerHidden] = useState(false);
  const handleChangeContent = (content) => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setActiveContent(content); 
      setFadeClass('fade-in'); 
    }, 300);
  };
  const handleSelectIcon = (iconName) => {
    if (iconName === 'explore') {
      setActiveContent('BookSearch');
      setContentContainerHidden(true); // Hide content-container
    } else {
      setActiveContent(iconName + 'Card');
      setContentContainerHidden(false); // Show content-container
    }
  };

  return (
    <div className="container">
      <SolarPanel onExplore={() => handleChangeContent('SolarSystem')}/>
      {!isContentContainerHidden && ( // Hide content-container if isContentContainerHidden = true
      <div className="content-container">
        <div className="explore">
          <div className="button-container">
            <div className="button" onClick={() => handleChangeContent('BigBang')}>Big Bang</div>
            <div className="button" onClick={() => handleChangeContent('Evolution')}>The Evolution Of The Earth</div>
          </div>
          <div className="planet-list">
            <Earth onExplore={() => handleChangeContent('EarthCard')} />
            <Sun onExplore={() => handleChangeContent('SunCard')} />
            <Mars onExplore={() => handleChangeContent('MarsCard')} />
            <Saturn onExplore={() => handleChangeContent('SaturnCard')} />
            <Mercury onExplore={() => handleChangeContent('MercuryCard')}/>
            <Venus onExplore={() => handleChangeContent('VenusCard')}/>
            <Jupiter onExplore={() => handleChangeContent('JupiterCard')}/>
            <Uranus onExplore={() => handleChangeContent('UranusCard')}/>
            <Neptune onExplore={() => handleChangeContent('NeptuneCard')}/>
          </div>
        </div>
        <div className={`infor ${fadeClass}`}>
          {activeContent === 'BigBang' && <BigBang />}
          {activeContent === 'Evolution' && <Evolution />}
          {activeContent === 'EarthCard' && <EarthCard />}
          {activeContent === 'SunCard' && <SunCard />}
          {activeContent === 'MarsCard' && <MarsCard />}
          {activeContent === 'SaturnCard' && <SaturnCard />}
          {activeContent === 'MercuryCard' && <MercuryCard />}
          {activeContent === 'VenusCard' && <VenusCard />}
          {activeContent === 'JupiterCard' && <JupiterCard />}
          {activeContent === 'UranusCard' && <UranusCard />}
          {activeContent === 'NeptuneCard' && <NeptuneCard />}
          {activeContent === 'SolarSystem' && <SolarSystemView />}
        </div>
      </div>
      )}
      {activeContent === 'BookSearch' && <BookSearch />}
      <Navbar onSelectIcon={handleSelectIcon}/>
    </div>
  );
}

export default Home;
